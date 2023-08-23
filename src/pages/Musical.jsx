import React from "react";
import RankingSlider from "../componenets/RankingSlider";
import styled from "styled-components";
import Header from "../componenets/Header";
import LaptopNavigator from "../componenets/LaptopNavigator";
import "../css/Muscial.css";

const Musical = () => {
  const musicalItem = [1, 2, 3, 4, 5, 6, 7, 8];

  const Itemimg = styled.img`
    width: 100%;
    heigh: 100%;
    object-fit: cover;
  `;

  return (
    <div>
      <Header />
      <LaptopNavigator />
      <div className="musical-title-container">
        <h1>Muscial</h1>
      </div>
      <div className="muscial-header">
        <div className="musical-text-container">
          <h2>랭킹</h2>
        </div>
        <div className="musical-slider-container">
          <RankingSlider />
        </div>
      </div>
      <div className="musical-article">
        <h2 className="musical-subtitle">추천 작품</h2>
        <div className="musical-item-grid">
          {musicalItem.map((number, index) => (
            <div className="musical-item-container" key={index}>
              <Itemimg
                className="musical-item"
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

export default Musical;
