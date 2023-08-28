import React from 'react'

const Advanceticket = () => {
  return (
    <div>
      <div className="myPageCheckContainer">
        <div className="myPageCheckTitle">
          <h2>예매권</h2>
        </div>
        <p>
          티켓링크에서 공연, 전시의 티켓 예매가 가능합니다.
          <br />
          마이페이지에서는 상품권의 남은 잔액을 조회할 수 있으며, 실제 사용은 결제 시에 가능합니다.
        </p>

        <div className="sortbx">
          <table>
            <thead>
              <tr>
                <th>예매권번호</th>
                <th>예매 가능한 티켓</th>
                <th>사용 가능 매수</th>
                <th>유효기간</th>
                <th>예매권상태</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div>
            <div className="ticketGuideTableBody">
              <h5>예매권 관련 안내</h5>
              <ol>
                <li>
                  예매권은 유효기간 내에 티켓링크 웹 사이트와 모바일 앱을 통해서 사용 가능합니다. (예매일 기준)
                </li>
                <li>
                  예매권을 이용하여 예매하실 경우, 별도의 예매수수료가 부과되지 않습니다.
                </li>
                <li>
                  예매권을 이용하여 스포츠 경기 예매를 하실 경우, 구단의 매 수 제한 정책에 따라 예매가 가능합니다.
                </li>
                <li>
                  예매권 등록은 예매권 사용 가능 기간에만 등록 가능합니다.
                </li>
                <li>
                  복구된 시점에 이미 유효기간이 만료되었을 경우, 우천취소일로부터 1주일의 유효기간이 연장됩니다. (직접 예매취소하신 경우 기간연장 불가)
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advanceticket