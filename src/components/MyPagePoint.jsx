import React from "react";
import "../css/ServiceMain.css";
import "../css/MyPage.css";

const MyPagePoint = () => {
  return (
    <div className="myPageCheckContainer">
      <div className="myPageCheckTitle">
        <h2>SHOWDAY 포인트</h2>
      </div>
      <p>
        <span className="textRedColor">SHOWDAY</span> 아이디로 차곡차곡 쌓아둔
        포인트와 캐쉬 입니다.
        <br/>
        자세한 내역은 SHOWDAY 페이지를 통해 확인하실 수 있습니다.
      </p>

      <div className="sortbx">
        <div>
          <div className="ticketGuideTableBody">
            <h2>SHOWDAY 포인트</h2>
            <p>내 사용가능 포인트</p>
            <button>SHOWDAY포인트 내역 확인</button>
          </div>
        </div>
        <div>
          <div className="ticketGuideTableBody">
            <h5>SHOWDAY 포인트/캐쉬 안내</h5>
            <ol>
              <li>
                포인트의 유효기간은 사용가능 포인트 전환일로부터 2년이며, 이벤트
                적립금의 유효기간은 다르게 설정될 수 있습니다.
              </li>
              <li>적립금 1포인트는 현금 1원과 동일하게 사용할 수 있습니다.</li>
              <li>
                포인트는 티켓링크 뿐 아니라 SHOWDAY 가맹점 어디에서나 현금처럼
                사용할 수 있습니다.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPagePoint;
