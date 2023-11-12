import React, { useEffect, useState } from "react";
import StyledLink from "./styled";
import axios from "axios";


const ORDER_STATE = {
  "PENDING": 1, // "예약대기"
  "PROCESSING": 2, // 진행중
  "CANCELED": 3, // 예약취소
  "REFUNDED": 4,
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
    case ORDER_STATE.REFUNDED:
      break;
    case ORDER_STATE.COMPLETE: return "예약완료";
      break;
    default:
      return "예약대기";
  };
};

const TicketingCancle = () => {

  const [orders, setOrders] = useState([]); // State to store the response data

  const formatDate = (dateArray) => {
    return `${dateArray[0]}-${String(dateArray[1]).padStart(2, '0')}-${String(dateArray[2]).padStart(2, '0')}`;
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('ACCESS_TOKEN');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };

        const response = await axios.get('http://localhost/order', config);
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchOrders(); // 함수 호출
  }, []);

    return (
        <div className="myPageCheckContainer">
          <div className="myPageCheckTitle">
            <h2>예매확인/취소</h2>
          </div>
          <p>
            <span className="textRedColor">예매번호</span>를 클릭하면 예매 상세
            내용을 확인할 수 있습니다.
            <br/>
            공연/전시 예매 내역은 하단의 공연/전시 탭을 선택하면 확인할 수 있습니다.
          </p>

          <div className="sortbx">
            <dl>
              <dt>기간별 조회</dt>
              <dd>
                <button>15일</button>
                <button>1개월</button>
                <button>2개월</button>
                <button>3개월</button>
              </dd>
              <dt>월 별 조회</dt>
              <dd>
                <input type="date"/>
                <button>조회</button>
              </dd>
            </dl>
            <p>
              예매한 내역이 확인이 안되실 경우{" "}
              <a href="/" className="textRedColor">
                1:1 상담 문의
              </a>
              를 이용해주세요.
            </p>
            <table>
              <thead>
              <tr>
                <th>예매번호</th>
                <th>공연 이름</th>
                <th>관람일시</th>
                <th>매수</th>
                <th>취소가능일</th>
                <th>상태</th>
              </tr>
              </thead>
              <tbody>
              {orders.map(order => (
                  <tr key={order.orderId}>
                    <td>
                        {order.orderId}
                    </td>
                    <td>
                      <StyledLink to={`/mypage/ticketingdetail?orderId=${order.orderId}`}>
                        {order.reservation.reservationShowName}
                      </StyledLink>
                    </td>
                    <td>{formatDate(order.reservation.reservationDate)}</td>
                    <td>{order.reservation.reservationTicketAmount}</td>
                    <td>{/* 취소 가능일 정보가 필요하다면 여기에 추가하세요 */}</td>
                    <td>{order.reservation.reservationState}</td>
                  </tr>
              ))}
              </tbody>
            </table>
            <div>
              <div className="ticketGuideTableBody">
                <h5>티켓취소 안내</h5>
                <ol>
                  <li>
                    예매한 티켓 전체 취소, 혹은 신용카드 결제 시 부분 취소가
                    가능합니다.
                    <br/>
                    단, 일부 상품의 경우도 부분취소가 불가합니다.
                  </li>
                  <li>
                    티켓이 배송된 이후에는 인터넷이나 고객센터를 통한 취소가
                    불가하며, 받으신 티켓을 취소일 전까지 NHN LINK 본사로 반송을
                    해주셔야 취소 가능합니다. (등기우편을 이용해주세요!)
                  </li>
                  <li>
                    예매 당일 자정까지 취소하실 경우는 예매수수료도 환불되며,
                    취소수수료가 부과되지 않습니다. 그 이후에 취소하실 경우는
                    예매수수료가 환불되지 않으며, 취소수수료는 정책에 따라
                    부과됩니다.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
    );
  };
export default TicketingCancle;
