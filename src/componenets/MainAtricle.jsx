import React from "react";
import styled from "styled-components";
import "../css/MainArticle.css";
import { useState } from "react";

const PurpleBtn = styled.button`
  width: 4.5rem;
  height: 2.5rem;
  border-radius: 20px;
  background-color: none;
  border: 1px solid rgb(0, 0, 0, 0.3);
  margin: 0 1rem;

  &:active,
  &:hover,
  &.active {
    background-color: purple;
    color: white;
  }
`;

const MainAtricle = () => {
  const [activeBtn, setActiveBtn] = useState(null);
  const handleBtnClick = (genre) => {
    setActiveBtn(genre);
  };

  return (
    <div className="article-container">
      <h1>장르별 랭킹</h1>
      <div>
        <PurpleBtn
          className={activeBtn === "뮤지컬" ? "active" : ""}
          onClick={() => handleBtnClick("뮤지컬")}
        >
          뮤지컬
        </PurpleBtn>
        <PurpleBtn
          className={activeBtn === "콘서트" ? "active" : ""}
          onClick={() => handleBtnClick("콘서트")}
        >
          콘서트
        </PurpleBtn>
        <PurpleBtn
          className={activeBtn === "연극" ? "active" : ""}
          onClick={() => handleBtnClick("연극")}
        >
          연극
        </PurpleBtn>
      </div>
    </div>
  );
};

export default MainAtricle;
