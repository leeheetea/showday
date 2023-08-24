import React from "react";
import RankingSlider from "../components/RankingSlider";
import styled from "styled-components";
import Header from "../components/Header";
import LaptopNavigator from "../components/LaptopNavigator";
import MobileNavigator from "../components/MobileNavigator";
import "../css/Theatre.css";

const Theatre = () => {
  const theatreItem = [1, 2, 3, 4, 5, 6, 7, 8];

  const Itemimg = styled.img`
    width: 100%;
    heigh: 100%;
    object-fit: cover;
  `;

  return (
    <div>
      <Header />
      <MobileNavigator />
      <LaptopNavigator />
      <div className="theatre-title-container">
        <h1>연극</h1>
      </div>
      <div className="muscial-header">
        <div className="theatre-text-container">
          <h2>랭킹</h2>
        </div>
        <div className="theatre-slider-container">
          <RankingSlider />
        </div>
      </div>
      <div className="theatre-article">
        <h2 className="theatre-subtitle">추천 작품</h2>
        <div className="theatre-item-grid">
          {theatreItem.map((number, index) => (
            <div className="theatre-item-container" key={index}>
              <Itemimg
                className="muscial-item"
                src="../img/slide1.webp"
                alt=""
              />
              <span>{number}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Theatre;
