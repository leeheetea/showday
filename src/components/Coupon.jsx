import React from 'react'

const Coupon = () => {
  return (
    <div>
        <div className="myPageCheckContainer">
        <div className="myPageCheckTitle">
          <h2>쿠폰</h2>
        </div>
        <p>
          다운받으신 쿠폰을 확인 또는, 소유하신 쿠폰번호를 등록할 수 있습니다.
        </p>

        <div className="sortbx">
          <table>
            <thead>
              <tr>
                <th>쿠폰명</th>
                <th> 혜택 </th>
                <th>사용기간</th>
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
              <h5>쿠폰 발급 및 사용 시 유의사항</h5>
              <ol>
                <li>
                  내부 사정에 따라 사전고지 없이 변경되거나 종료될 수 있습니다.
                </li>
                <li>
                  쿠폰은 사용 조건에 따라 사용이 제한될 수 있습니다.
                </li>
                <li>
                  발급받은 쿠폰을 사용할 수 있는 최대 매수도 쿠폰에 따라 상이합니다.
                </li>
                <li>
                  쿠폰 사용한 예매건일 경우 부분취소는 불가합니다. 티켓부분취소를 원하실 경우 전체취소 후 다시 예매해주셔야 합니다.
                  <br/>
                  단, 이 경우 기존의 좌석을 유지할 수 없을 수도 있습니다.
                </li>
                <li>
                  쿠폰 사용한 예매건을 전체취소 하실 경우 쿠폰이 복구되어 재사용 가능합니다.
                  <br/>
                  단, 특정쿠폰 및 쿠폰유효기간이 지난 쿠폰일 경우는 복구되지 않을 수 있습니다.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coupon