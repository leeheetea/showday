import React, { useEffect, useState } from "react";
import "../css/TicketingdetailPage.css"
import {useLocation} from "react-router-dom";
import "./TicketingdetailPage.css"
import axios from "axios";

const ORDER_STATE = {
  "PENDING": 1, // "예약대기"
  "PROCESSING": 2, // 진행중
  "CANCELED": 3, // 예약취소
  "REFUNDED": 4, // 환불완료
  "COMPLETE": 5 // 예약완료
};

const getReservationState = (state) => {
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
  const [orderDetail, setOrderDetail] = useState({
    orderState: "",
    reservationId: 0,
    seat: [],
    showImgUrl: "",
    userName: "",
    venueName: "",
  });

  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get('orderId');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('ACCESS_TOKEN');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            orderId: orderId
          }
        };
        const response = await axios.get('http://localhost/reservation', config);
        console.log("response", response)
        setOrderDetail(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchOrders().then(() => console.log(orderDetail))
  }, []);

  return (
    <div>
      <div className="myPageCheckContainer">
        <div className="myPageCheckTitle">
          <h2>예매 내역</h2>
        </div>
        <div>
          <div className="ticketingData">
            <div className='ticketingTitle'>
              <div>{orderDetail.venueName + " -"}</div>
              <div>{getReservationState(orderDetail.orderState)}</div>
            </div>
            <div className="ticketing-list">
              <div> <img src={orderDetail.showImgUrl} alt="Show" /></div>
              <div>
                <table className="ticketing-table">
                  <tbody>
                  <tr>
                    <th>예매 번호</th>
                    <td>{orderDetail.reservationId}</td>
                    <th>예매자</th>
                    <td>{orderDetail.userName}</td>
                  </tr>
                  <tr>
                    <th>관람일</th>
                    <td colSpan="3">2023-11-12</td>
                  </tr>
                  <tr>
                    <th>공연장</th>
                    <td colSpan="3">{orderDetail.venueName}</td>
                  </tr>
                  <tr>
                    <th>좌석</th>
                    <td colSpan="3">
                      {orderDetail.seat && orderDetail.seat.map((seat, index) => (
                          <div key={index}>
                            {seat.seatRow} 열 {seat.seatColumn} 석
                          </div>
                      ))}
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