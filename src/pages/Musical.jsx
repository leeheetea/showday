import React from "react";
import RankingSlider from "../components/RankingSlider";
import Header from "../components/Header";
import LaptopNavigator from "../components/LaptopNavigator";
import MobileNavigator from "../components/MobileNavigator";
import ToTopButton from "../components/ToTopButton ";
import RecommendItem from "../components/RecommendItem";
import "../css/Muscial.css";

const Musical = () => {
  return (
    <div>
      <Header />
      <MobileNavigator />
      <LaptopNavigator />
      <div className="musical-title-container">
        <h1 className="musical-title">뮤지컬</h1>
      </div>
      <div className="musical-header">
        <div className="musical-text-container">
          <h2 className="musical-subtitle">랭킹</h2>
        </div>
        <div className="musical-slider-container">
          <RankingSlider />
        </div>
      </div>
      <div className="musical-article">
        <div>
          <h2 className="musical-subtitle">추천 뮤지컬</h2>
        </div>
        <RecommendItem />
      </div>
      <ToTopButton />
    </div>
  );
};

export default Musical;
