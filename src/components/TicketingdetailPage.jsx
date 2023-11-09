import React from 'react'
import "../css/TicketingdetailPage.css"

const TicketingdetailPage = () => {
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
                  <div>예약-결제 전</div>
                </div>
                <div className="ticketing-list">
                  <div>이미지 들어갈 자리</div>
                  <div>
                    <table className="ticketing-table">
                      
                        <tr>
                          <th>예매 번호</th>
                          <td>예매 번호</td>
                          <th>예매자</th>
                          <td>예매자</td>
                        </tr>  
                        <tr>
                          <th>관람일</th>
                          <td colSpan="3">관람일</td>
                        </tr>  
                        <tr>
                          <th>공연장</th>
                          <td colSpan="3">공연장</td>
                        </tr>  
                        <tr>
                          <th>좌석</th>
                          <td colSpan="3">좌석</td>
                        </tr>  
                        <tr>
                          <th>티켓수령방법</th>
                          <td colSpan="3">티켓수령방법</td>
                        </tr>

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