import React from "react";
import styled from "styled-components";

const Commend = () => {
  const CommendContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-gap: 15px;
    place-items: center;
  `;
  const ImgCommendContainer = styled.img`
    width: 200px;
    height: 247px;
    padding: 10px;
    justify-content: center;
    place-items: center;
  `;
  
  return (
    <div>
      <div className="DetailRecommendTitleWrapper">
        <h3>추천 공연 / 전시</h3>
      </div>
      <CommendContainer>
        <a href="/">
          <ImgCommendContainer
            src="https://image.toast.com/aaaaab/ticketlink/TKL_4/222_poster_0713.jpg"
            alt=""
          />
          <div>
            <span>{"뮤지컬<22년 2개월>"}</span>
          </div>
        </a>
        <a href="/">
          <ImgCommendContainer
            src="https://image.toast.com/aaaaab/ticketlink/TKL_9/m0808.jpg"
            alt=""
          />
          <div>
            <span>{"박재정 콘서트 < Alone >"}</span>
          </div>
        </a>
        <a href="/">
          <ImgCommendContainer
            src="https://image.toast.com/aaaaab/ticketlink/TKL_4/suf-mimori-kr.jpg"
            alt=""
          />
          <div>
            <span>미모리스즈코 팬미팅</span>
          </div>
        </a>
        <a href="/">
          <ImgCommendContainer
            src="https://image.toast.com/aaaaab/ticketlink/TKL_8/manbok_230704.jpg"
            alt=""
          />
          <div>
            <span>{"<만복이네 떡집> - 김천"}</span>
          </div>
        </a>
      </CommendContainer>
    </div>
  );
};

export default Commend;
