import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBookStep } from '../../store/slice'

import "./BookInfoView.css";
import BookTitle from "./BookTitle";
import LineContainer from "../LineContainer";
import LineButton from "../LineButton";
import utils from "../../utils";

const BookInfoView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.booksData);

  // state에서 화면에 표시할 공연 정보 선언
  const { id, title, price, url } = state.showInfo[0];
  const { bookDate, bookShowTime, totalPrice, bookStep } = state;

  const handleInfoUpdate = useCallback(() => {
    console.log(
      '(BookInfoView) 가격업뎃!! ',
      'sumPrice : ',
      totalPrice.sumPrice,
      'sumDiscount : ',
      totalPrice.sumDiscount,
      'resultTotalPrice : ',
      totalPrice.resultTotalPrice
    );
  }, [totalPrice, bookShowTime]);

  useEffect(() => {
    handleInfoUpdate();
  }, [handleInfoUpdate]);

  // 이전버튼 클릭시(예매 스텝에 따라 버튼 및 예매 빠져나가기 처리)
  const handlePrevBtn = () => {
    navigate(-1);
  }

  const handleNextBtn = () => {
    console.log('handleNextBtn - bookStep : ', bookStep);
    dispatch(setBookStep({ bookStep: bookStep + 1 }))
    navigate('/book/' + id + '/' + (bookStep + 1));
  }

  return (
    <div className="bookInfoViewWrapper">
      <div className="titleContainer">
        <img className="titleLeft" src={url} alt="" />
      </div>
      <BookTitle width="90%" tpadding="30px">
        {title}
      </BookTitle>
      <BookTitle isleft="true" tPadding="100px">
        예매정보
      </BookTitle>
      <LineContainer width="94%" padding="10px" tmargin="10px">
        <ul>
          <li className="textLine">
            <span className="textLeft">R석</span>
            <span className="textRight">1층F열3번</span>
          </li>
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
        <LineButton width='48%' height='60px' onClick={handlePrevBtn}>이전단계</LineButton>
        {(bookStep !== 4) ?
          <LineButton width='48%' height='60px' order='true' onClick={handleNextBtn}>다음단계</LineButton>
          : <LineButton width='48%' height='60px' point='true' onClick={handleNextBtn}>다음단계</LineButton>}
      </div>
    </div>
  );
};

export default BookInfoView;
