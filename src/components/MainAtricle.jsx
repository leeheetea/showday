import React from "react";
import styled from "styled-components";
import "../css/MainArticle.css";
import { useState } from "react";
import { useRankingType } from "../store/RankingTypeContext";

const PurpleBtn = styled.button`
  width: 4.5rem;
  height: 2.5rem;
  border-radius: 20px;
  background-color: none;
  border: 1px solid rgb(0, 0, 0, 0.3);
  margin: 0 1rem;
  cursor: pointer;

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

  const { setRankingType } = useRankingType();

  return (
    <div className="article-container">
      <h1>장르별 랭킹</h1>
      <div>
        <PurpleBtn
          className={activeBtn === "musical" ? "active" : ""}
          onClick={() => {
            setRankingType("musical");
            handleBtnClick("musical");
          }}
        >
          뮤지컬
        </PurpleBtn>
        <PurpleBtn
          className={activeBtn === "concert" ? "active" : ""}
          onClick={() => {
            handleBtnClick("concert");
            setRankingType("concert");
          }}
        >
          콘서트
        </PurpleBtn>
        <PurpleBtn
          className={activeBtn === "theatre" ? "active" : ""}
          onClick={() => {
            handleBtnClick("theatre");
            setRankingType("theatre");
          }}
        >
          연극
        </PurpleBtn>
      </div>
    </div>
  );
};

export default MainAtricle;
