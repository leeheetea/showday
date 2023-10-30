import React, {useEffect, useCallback, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBookStep } from '../../store/slice'

import "./BookInfoView.css";
import BookTitle from "./BookTitle";
import LineContainer from "../LineContainer";
import LineButton from "../LineButton";
import utils from "../../utils";

const SEAT_DELIMITER = '@';

const BookInfoView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.booksData);

  // state에서 화면에 표시할 공연 정보 선언
  const { id, title, price, url } = state.showInfo[0];
  const { bookDate, bookShowTime, totalPrice, bookStep } = state;
  const myBookSeatList = state.seats.myBookSeats;

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
      case 5: break;
    }

    console.log('handleNextBtn count : ', e.target.value);

    dispatch(setBookStep({ bookStep: bookStep + 1 }))
    navigate('/book/' + id + '/' + (bookStep + 1));
  }

  return (
    <div className="bookInfoViewWrapper">
      <div className="titleContainer">
        <img className="titleLeft" src={url} alt="" />
        <BookTitle width='30%'  isflex='true'>
          {title}
        </BookTitle>
      </div>
      <BookTitle isleft="true" tpadding="100px" >
        예매정보
      </BookTitle>
      <LineContainer width="94%" height="133px" padding="10px" tpadding="10px">
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
      <table className="bookResultTable">
        {/* <caption>예매정보</caption> */}
        <colgroup>
          <col width="70px" />
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
      <div className='bookButtonContainer'>
        {(bookStep >= 2 && bookStep <= 5) &&
        <LineButton width='48%' height='50px' onClick={handlePrevBtn}>이전단계</LineButton>}
        {(bookStep !== 5) ?
          <LineButton width='48%' height='50px' order='true' onClick={handleNextBtn}>다음단계</LineButton>
          : <LineButton width='48%' height='50px' point='true' onClick={handleNextBtn}>다음단계</LineButton>}
      </div>
    </div>
  );
};

export default BookInfoView;
