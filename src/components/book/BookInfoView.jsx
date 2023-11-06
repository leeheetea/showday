import React, {useEffect, useCallback, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBookStep } from '../../store/slice'
//import Modal from "../Modal";

import "./BookInfoView.css";
import BookTitle from "./BookTitle";
import LineContainer from "../LineContainer";
import LineButton from "../LineButton";
import utils from "../../utils";
import styled from "styled-components";
import CheckBooksPage from "../../pages/book/CheckBooksPage";
import {Line} from "../../styles/styled";

const SEAT_DELIMITER = '@';
const PAYMENT_STEP = 5;

const BookInfoView = ({childern}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.booksData);
  const userState = useSelector((state) => state.userInfo);

  // state에서 화면에 표시할 공연 정보 선언
  const { id, title, price, url } = state.showInfo[0];
  const { bookDate, bookShowTime, totalPrice, bookStep } = state;
  const { name, phone, email } =  userState;
  const myBookSeatList = state.seats.myBookSeats;
  const accountList = ["우리 1002-1111-1111", "하나 222-2222-2222-222", "신한 333-33333-3333-33"];
  const [payName,  setPayName] = useState('');
  const [payAccount, setPayAccount] = useState("");
  const [isCheckedPayAgree, setIsCheckedPayAgree] = useState(false);
  //const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInfoUpdate = useCallback(() => {
    // console.log(
    //   '(BookInfoView) 가격업뎃!! ',
    //   'sumPrice : ',
    //   totalPrice.sumPrice,
    //   'sumDiscount : ',
    //   totalPrice.sumDiscount,
    //   'resultTotalPrice : ',
    //   totalPrice.resultTotalPrice
    // );
  }, [totalPrice, bookShowTime, myBookSeatList]);

  useEffect(() => {
    handleInfoUpdate();
  }, [handleInfoUpdate]);

  // 이전버튼 클릭시(예매 스텝에 따라 버튼 및 예매 빠져나가기 처리)
  const handlePrevBtn = () => {
    //navigate(-1);
    //console.log('handlePrevBtn(이전) - bookStep : ', bookStep);
    dispatch(setBookStep({ bookStep: bookStep - 1 }))
    navigate('/book/' + id + '/' + (bookStep - 1));
  }

  const handleNextBtn = (e) => {
    // '다음단계'선택 시, 스템별 확인 사항 체크후, 이상 없다면 아래 로직 실행
    switch (bookStep) {
      case 2: break;
      case 3:
        // 매수선택 오류 사항 체크 확인(할인전 티켓금액가/장당가격 이 전체 매수랑 같은지 확인)
        if((totalPrice.sumPrice/utils.getRemoveMarkThousand(price))
          !== myBookSeatList.length) {
          alert('선택하신 좌석수와 예매하실 티켓매수가 일치하지 않습니다.');
          return;
        }
        break;
      case 4:
        // 예매확인 필수동의 모두 체크했는지 확인
        if (!state.confirms?.step4) {
          alert('주문자 확인 및 휴대폰번호와 이메일 수집(개인정보 제공 동의)을 확인하셔야\n결제가 가능합니다. ');
          return;
        }
        break;
      case 5:
        // 구매조건 결재진행 동의 체크
        if(isCheckedPayAgree) {
          // 결재팝업으로 띄우기
          console.log('구매조건 동의');
          let message = `
            무통장입금 예약등록이 완료되었습니다.\n
            에매확인/취소페이지의 예매상세보기에서 입금하실 계좌번호를 확인하신후 입금기한내에 입금을 완료하셔야 예매가 완료됩니다.\n\n
            은행명 : {payAccount}\n
            예금주 : 쇼데이\n
            입금기한 : {Date.now()}
          `;
          //setIsModalOpen(true);
          alert(message);
        } else {
          alert('구매 조건 및 결제 진행 동의 부탁드립니다.');
        }
        return;
        break;
    }

    //console.log('handleNextBtn count : ', e.target.value);

    dispatch(setBookStep({ bookStep: bookStep + 1 }))
    navigate('/book/' + id + '/' + (bookStep + 1));
  }

  function show1() {

  }

  function show2() {
    return (
      <div>
        준비중입니다....
      </div>
    )
  }

  function getPaymentInfo() {
    return (
      <table className="bookResultTableSimple">
        {/* <caption>예매정보</caption> */}
        <colgroup>
          <col width="70px"/>
        </colgroup>
        <tbody>
        <tr>
          <td className="bookResultTdException" colSpan={4} id="_price_ticket">
            <input type="radio" name="tab" value="pay1" onClick={() => show1()} />무통장 입금&nbsp;&nbsp;
            <input type="radio" name="tab" value="pay2" onClick={() => show2()} />카드 결제&nbsp;&nbsp;
            <input type="radio" name="tab" value="pay3" onClick={() => show2()} />에스크로(실시간 계좌이체)&nbsp;&nbsp;
            <input type="radio" name="tab" value="pay4" onClick={() => show2()} />휴대폰 결제&nbsp;&nbsp;
            <input type="radio" name="tab" value="pay5" onClick={() => show2()} />에스크로(가상계좌)
          </td>
        </tr>
        <tr>
          <td className="bookResultTd" colSpan={4} id="_price_ticket">
            <p>실제 입금자명이 아래 기입한 입금자명과 다르거나 기호, 특수문자가 포함된 경우 자동 입금확인이 불가합니다. 동일하게 입금해 주시기바랍니다.</p>
            <form action="">
              <LineContainer tmargin='15px' style={{textAlign: '-webkit-center'}}>
                <div className='checkBookAccountInfo'>
                  <p className='required'>입금자명</p>
                  <p><input
                    value={payName}
                    onChange={(e) => setPayName(e.target.value)}
                    maxLength={11}
                    placeholder="입금자명"></input></p>
                </div>
                <div className='checkBookAccountInfo'>
                  <p className='required'>입금은행</p>
                  <p><select
                    value={payAccount}
                    onChange={(e) => setPayAccount(e.target.value)}>
                    {accountList.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </select></p>
                </div>
              </LineContainer>
            </form>
          </td>
        </tr>
        </tbody>
      </table>
    );
  }

  function getTitle() {
    return (
      (bookStep !== PAYMENT_STEP) ?
        (<div className="titleContainer">
          <img className="titleLeft" src={url} alt=""/>
          <BookTitle width='30%' isflex='true'>
            {title}
          </BookTitle>
        </div>
        ) : (
          <>
        <div className="titleContainerRow">
          <BookTitle
            isflex='false' isleft='true'>{title}
          </BookTitle>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <img className="titleLeftSimple" src={url} alt=""/>
            <div style={{display: 'flex'}}>
              <LineContainer>{getDetailBookInfoSeatsSimple()}</LineContainer>
              <LineContainer width={'600px'}>
                {gtDetailBookInfoPriceSimple()}
              </LineContainer>
            </div>
          </div>
        </div>
        <div>
          <LineContainer>
            {getPaymentInfo()}
            <div className='checkBox payCheckBox'>
              <label htmlFor="payAgree">
                <input
                  id="payAgree"
                  type="checkbox"
                  checked={isCheckedPayAgree}
                  onChange={(e) => setIsCheckedPayAgree(e.target.checked)}
                />
                <span>위 구매조건을 확인, 결제진행에 동의합니다.</span>
              </label>
            </div>
          </LineContainer>

        </div>
        </>)
    );
  }

  function getOrderUserInfo() {
    return <form action="">
      <LineContainer tmargin='15px'>ㄹ굘ㅈ
        <div className='checkBookFormName'>
          <p>이름 | 홍길동</p>
          <p>휴대폰번호 | 010-1234-5678</p>
          <p>이메일 | abc@test.com</p>
        </div>
      </LineContainer>
    </form>;
  }

  function getDetailBookInfoSeats() {
    return <>
      {(bookStep !== PAYMENT_STEP) &&
        <BookTitle isleft="true" tpadding="100px">
          예매정보
        </BookTitle>}
      <LineContainer
        width="94%"
        height="133px"
        padding="10px"
        tpadding="10px">
        <ul className="reserveSeatInfo">
          {myBookSeatList.map((seat, idx) => {
            return (<li key={idx} className="textLine">
              <span className="textLeft">R석</span>
              <span className="textRight">
                {utils.getAboutDelimiter('F', SEAT_DELIMITER, seat)[0]} 열&nbsp;&nbsp;
                {utils.getAboutDelimiter('F', SEAT_DELIMITER, seat)[1]} 행
              </span>
            </li>);
          })}
        </ul>
      </LineContainer>
    </>;
  }

  function gtDetailBookInfoPrice() {
    return <>
      <table className="bookResultTable">
        {/* <caption>예매정보</caption> */}
        <colgroup>
          <col width="70px"/>
        </colgroup>
        <tbody>
        <tr className="bookResultTable">
          <th className="bookResultTh">일시</th>
          <td className="bookResultTd" id="_startDateTime">
            {bookDate} {bookShowTime}
          </td>
        </tr>
        <tr>
          <th className="bookResultTh">티켓금액</th>
          <td className="bookResultTd" id="_price_ticket">
            {utils.getMarkThousand(totalPrice.sumPrice)}
          </td>
        </tr>
        <tr>
          <th className="bookResultTh">할인</th>
          <td className="bookResultTd" id="_coupon_discount">
            {/* 청소년 할인 매수 고려한 할인금액 인지 체크 */}
            {utils.getMarkThousand(totalPrice.sumDiscount)}
          </td>
        </tr>
        <tr>
          <th className="bookResultTh">포인트 사용</th>
          <td className="bookResultTd" id="_price_discount">
            0
          </td>
        </tr>
        </tbody>
        <tfoot className="bookResultTfoot">
        <tr>
          <th className="bookResultThLast">총결제</th>
          <td className="bookResultTdLast">
            {utils.getMarkThousand(totalPrice.resultTotalPrice)}
          </td>
        </tr>
        </tfoot>
      </table>
    </>
  }

  function gtDetailBookInfoPriceSimple() {
    return <>
      <table className="bookResultTableSimple">
        {/* <caption>예매정보</caption> */}
        <colgroup>
          <col width="70px"/>
        </colgroup>
        <tbody>
        <tr>
          <th className="bookResultTh">주문자정보</th>
          <td className="bookResultTd" id="_price_ticket">
            홍길동&nbsp;&nbsp;010-1234-5678&nbsp;&nbsp;abc@test.com
          </td>
        </tr>
        <tr>
          <th className="bookResultTh">티켓금액</th>
          <td className="bookResultTd" id="_price_ticket">
            {utils.getMarkThousand(totalPrice.sumPrice)}
          </td>
        </tr>
        <tr>
          <th className="book젲ResultTh">할인</th>
          <td className="bookResultTd" id="_coupon_discount">
            {/* 청소년 할인 매수 고려한 할인금액 인지 체크 */}
            {utils.getMarkThousand(totalPrice.sumDiscount)}
          </td>
        </tr>
        </tbody>
        <tfoot className="bookResultTfoot">
        <tr>
          <th className="bookResultThLast">총결제</th>
          <td className="bookResultTdLast">
            {utils.getMarkThousand(totalPrice.resultTotalPrice)}
          </td>
        </tr>
        </tfoot>
      </table>
    </>
  }

  function getDetailBookInfoSeatsSimple() {
    return <>
      <table className="bookResultTableSimple">
        {/* <caption>예매정보</caption> */}
        <colgroup>
          <col width="70px"/>
        </colgroup>
        <tbody>
        <tr className="bookResultTableSimple">
          <th className="bookResultThSimple">공연시간</th>
          <td className="bookResultTdSimple" id="_startDateTime">
            {bookDate} {bookShowTime}
          </td>
        </tr>
        <tr className="bookResultTableSimple">
          <th className="bookResultThSimple">선택좌석</th>
        </tr>
        <tr className="bookResultTableSimple">
          <td className="bookResultTdSimple" colSpan={2} id="_startDateTime">
            {myBookSeatList.map((seat, idx) => {
              return (<li key={idx} className="textLine">
                <span>R석</span>
                <span>
                {utils.getAboutDelimiter('F', SEAT_DELIMITER, seat)[0]} 열&nbsp;&nbsp;
                  {utils.getAboutDelimiter('F', SEAT_DELIMITER, seat)[1]} 행
              </span>
              </li>);
            })}
          </td>
        </tr>
        </tbody>
      </table>
    </>
  }

  function getMoveStep() {
    return <div className={(bookStep !== PAYMENT_STEP) ? 'bookButtonContainer' : 'bookButtonContainerRow'}>
      {(bookStep >= 2 && bookStep <= PAYMENT_STEP) &&
        <LineButton
          width='48%'
          height='50px'
          onClick={handlePrevBtn}>
        이전단계
      </LineButton>}
      {(bookStep !== PAYMENT_STEP) ?
        <LineButton
          width='48%'
          height='50px'
          order='true'
          onClick={handleNextBtn}>
        다음단계
      </LineButton>
      : <LineButton
          width='48%'
          height='50px'
          point='true'
          onClick={handleNextBtn}>
          결제하기
        </LineButton>}
    </div>;
  }

  return (
    (bookStep !== PAYMENT_STEP) ?
    <div className="bookInfoViewWrapper">
      {getTitle()}
      {getDetailBookInfoSeats()}
      {gtDetailBookInfoPrice()}
      {getMoveStep()}
    </div>
    : <div className="bookInfoViewWrapperRow">
      <>
        <div className="bookLastInfoTop">
          <div style={{width: '100%'}}>
            {getTitle()}
          </div>
        </div>
        {getMoveStep()}
      </>
        {/*{isModalOpen && (*/}
        {/*  <Modal>*/}
        {/*    open={isModalOpen}*/}
        {/*    onClose={() => setIsModalOpen(false)}*/}
        {/*  </Modal>*/}
        {/*)}*/}
    </div>
  );
};

export default BookInfoView;
