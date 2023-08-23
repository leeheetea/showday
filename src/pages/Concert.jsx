import React from "react";
import RankingSlider from "../componenets/RankingSlider";
import styled from "styled-components";
import Header from "../componenets/Header";
import LaptopNavigator from "../componenets/LaptopNavigator";
import MobileNavigator from "../componenets/MobileNavigator";
import "../css/Concert.css";

const Concert = () => {
  const concertItem = [1, 2, 3, 4, 5, 6, 7, 8];

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
      <div className="concert-title-container">
        <h1>콘서트</h1>
      </div>
      <div className="muscial-header">
        <div className="concert-text-container">
          <h2>랭킹</h2>
        </div>
        <div className="concert-slider-container">
          <RankingSlider />
        </div>
      </div>
      <div className="concert-article">
        <h2 className="concert-subtitle">추천 작품</h2>
        <div className="concert-item-grid">
          {concertItem.map((number, index) => (
            <div className="concert-item-container" key={index}>
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

export default Concert;
