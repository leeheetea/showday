import React from "react";
import styled from "styled-components";
import "../css/DetailRecommend.css";

const ImgCommendContainer = styled.img`
  width: 200px;
  height: 247px;
  padding: 10px;
  justify-content: center;
  place-items: center;
`;

const Commend = () => {
  return (
    <div >
      <div className="detailRecommendTitleWrapper">
        <h3>추천 공연 / 전시</h3>
      </div>
      <div className="detailRecommend">
        <div className="commendRecommendContainer"> 
          <div className="recommend-item-container">
            <ImgCommendContainer
              src="https://image.toast.com/aaaaab/ticketlink/TKL_4/222_poster_0713.jpg"
              alt=""
            />
            <div>
              <span>{"뮤지컬<22년 2개월>"}</span>
            </div>
          </div>
          <div className="recommend-item-container">
            <ImgCommendContainer
              src="https://image.toast.com/aaaaab/ticketlink/TKL_9/m0808.jpg"
              alt=""
            />
            <div>
              <span>{"박재정 콘서트 < Alone >"}</span>
            </div>
          </div>
          <div className="recommend-item-container">
            <ImgCommendContainer
              src="https://image.toast.com/aaaaab/ticketlink/TKL_4/suf-mimori-kr.jpg"
              alt=""
            />
            <div>
              <span>미모리 스즈코 팬미팅</span>
            </div>
          </div>
          <div className="recommend-item-container">
            <ImgCommendContainer
              src="https://image.toast.com/aaaaab/ticketlink/TKL_5/g_0822.jpg"
              alt=""
            />
            <div>
              <span>지브리 페스티벌</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commend;
