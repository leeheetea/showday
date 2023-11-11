import React, { useEffect, useState } from "react";
import "../css/TicketingdetailPage.css"
import { callReservations } from "../service/book/bookApiService";
import {useLocation} from "react-router-dom";

const ORDER_STATE = {
  "PENDING": 1, // "예약대기"
  "PROCESSING": 2, // 진행중
  "CANCELED": 3, // 예약취소
  "REFUNDED": 4, // 환불완료
  "COMPLETE": 5 // 예약완료
};

const getReservationState = (state) => {
  console.log('getReservationState : ', state);
  switch (state) {
    case ORDER_STATE.PENDING: return "예약대기";
      break;
    case ORDER_STATE.PROCESSING:
      break;
    case ORDER_STATE.CANCELED: return "예약취소";
      break;
    case ORDER_STATE.REFUNDED: return "환불완료";
      break;
    case ORDER_STATE.COMPLETE: return "예약완료";
      break;
    default:
      return "예약대기";
  };
};

const TicketingdetailPage = () => {

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get('orderID'); // URL 쿼리 파라미터에서 'orderID' 값을 가져옵니다.

  return (
    <div>
      <div className="myPageCheckContainer">
        <div className="myPageCheckTitle">
          <h2>예매 내역</h2>
        </div>
        <div>
          <div className="ticketingData">
            <div className='ticketingTitle'>
              <div>뮤지컬 제목</div>
              <div>예약</div>
            </div>
            <div className="ticketing-list">
              <div>이미지 들어갈 자리</div>
              <div>
                <table className="ticketing-table">
                  <tbody>
                  <tr>
                    <th>예매 번호</th>
                    <td></td>
                    <th>예매자</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>관람일</th>
                    <td colSpan="3">관람일</td>
                  </tr>
                  <tr>
                    <th>공연장</th>
                    <td colSpan="3"></td>
                  </tr>
                  <tr>
                    <th>좌석</th>
                    <td colSpan="3">
                      {/* {reservations?.seat && reservations?.seat.map((seat) => {
                        return (
                          <div key={reservations.seatId}>
                            {seat.seatRow} 열 {seat.seatCol} 석
                          </div>
                        );
                      })} */}
                    </td>
                  </tr>
                  <tr>
                    <th>티켓수령방법</th>
                    <td colSpan="3">현장수령</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TicketingdetailPage