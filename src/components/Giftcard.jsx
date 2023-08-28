import React from 'react'

const Giftcard = () => {
  return (
    <div>
       <div className="myPageCheckContainer">
        <div className="myPageCheckTitle">
          <h2>상품권</h2>
        </div>
        <p>
        마이페이지에서는 상품권의 남은 잔액을 조회할 수 있으며, 실제 사용은 결제 시에 가능합니다.
        </p>

        <div className="sortbx">
          
          <div>
            <div className="ticketGuideTableBody">
              <h5>쿠폰 발급 및 사용 시 유의사항</h5>
              <ol>
                <li>
                  유효기간이 지난 상품권
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Giftcard