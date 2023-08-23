import React from "react";
import RankingSlider from "../components/RankingSlider";
import Header from "../components/Header";
import LaptopNavigator from "../components/LaptopNavigator";
import MobileNavigator from "../components/MobileNavigator";
import "../css/Muscial.css";
import { useSelector } from "react-redux";
import { useRankingType } from "../store/RankingTypeContext";

const Musical = () => {
  const musicals = useSelector((state) => state.musicals);
  const { rankingType, setRankingType } = useRankingType();
  setRankingType("musical");

  return (
    <div>
      <Header />
      <MobileNavigator />
      <LaptopNavigator />
      <div className="musical-title-container">
        <h1>뮤지컬</h1>
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
          {musicals.map((musical, index) => (
            <div className="musical-item-container" key={index}>
              <img className="musical-item" src={musical.url} alt="" />
              <span className="musical-item-title">{musical.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Musical;
