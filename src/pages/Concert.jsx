import React from "react";
import RankingSlider from "../components/RankingSlider";
import Header from "../components/Header";
import LaptopNavigator from "../components/LaptopNavigator";
import MobileNavigator from "../components/MobileNavigator";
import ToTopButton from "../components/ToTopButton ";
import RecommendItem from "../components/RecommendItem";
import "../css/Concert.css";

const Concert = () => {
  return (
    <div>
      <Header />
      <MobileNavigator />
      <LaptopNavigator />
      <div className="concert-title-container">
        <h1 className="concert-title">콘서트</h1>
      </div>
      <div className="concert-header">
        <div className="concert-text-container">
          <h2 className="concert-subtitle">랭킹</h2>
        </div>
        <div className="concert-slider-container">
          <RankingSlider />
        </div>
      </div>
      <div className="concert-article">
        <div>
          <h2 className="concert-subtitle">추천 콘서트</h2>
        </div>
        <RecommendItem />
      </div>
      <ToTopButton />
    </div>
  );
};

export default Concert;
