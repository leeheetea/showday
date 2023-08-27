import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./BookInfoView.css";
import BookTitle from "./BookTitle";
import LineContainer from "../LineContainer";
import LineButton from "../LineButton";
import util from "../../utils";

const BookInfoView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.booksData);

  // state에서 화면에 표시할 공연 정보 선언
  const { title, price, url } = state.showInfo[0];
  const { bookDate, youtDiscount, bookShowTime } = state;

  useEffect(() => {
    //dispatch(getShowInfoById({ id: id }));
    console.log('(BookInfoView) info : ', state);
  }, []);

  // 이전버튼 클릭시(예매 스텝에 따라 버튼 및 예매 빠져나가기 처리)
  const handlePrevBtn = () => {
    navigate(-1);
  }

  return (
    <div className="bookInfoViewWrapper">
      <div className="titleContainer">
        <img className="titleLeft" src={url} />
      </div>
      <BookTitle width='90%' tpadding='30px'>{title}</BookTitle>
      <BookTitle isleft='true' tPadding='100px'>예매정보</BookTitle>
      <LineContainer width='94%' padding='10px' tMargin='10px'>
        <ul>
          <li className='textLine'>
            <span className='textLeft'>R석</span>
            <span className='textRight'>1층F열3번</span>
          </li>
        </ul>
      </LineContainer>
      <table className='bookResultTable'>
        {/* <caption>예매정보</caption> */}
        <colgroup>
          <col width="70px" />
        </colgroup>
        <tbody>
          <tr className='bookResultTable'>
            <th className='bookResultTh'>일시</th>
            <td className='bookResultTd' id="_startDateTime">{bookDate} {bookShowTime}</td>
          </tr>
          <tr>
            <th className='bookResultTh'>티켓금액</th>
            <td className='bookResultTd' id="_price_ticket">{util.getMarkThousand(price)}</td>
          </tr>
          <tr>
            <th className='bookResultTh'>할인</th>
            <td className='bookResultTd' id="_coupon_discount">
              {/* 청소년 할인 매수 고려한 할인금액 인지 체크 */}
              {'-' + util.getMarkThousand(util.getRemoveMarkThousand(price) * (-youtDiscount / 100))}
            </td>
          </tr>
          <tr>
            <th className='bookResultTh'>포인트 사용</th>
            <td className='bookResultTd' id="_price_discount">0</td>
          </tr>
        </tbody>
        <tfoot className='bookResultTfoot'>
          <tr>
            <th className='bookResultThLast'>총결제</th>
            <td className='bookResultTdLast'>60,000</td>
          </tr>
        </tfoot>
      </table>
      <div className='bookButtonContainer'>
        <LineButton width='48%' height='60px' onClick={handlePrevBtn}>이전</LineButton>
        <LineButton width='48%' height='60px' order='true'>결제하기</LineButton>
      </div>
    </div>
  );
};

export default BookInfoView;
