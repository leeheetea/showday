import React from "react";
import RankingSlider from "../components/RankingSlider";
import Header from "../components/Header";
import LaptopNavigator from "../components/LaptopNavigator";
import MobileNavigator from "../components/MobileNavigator";
import ToTopButton from "../components/ToTopButton ";
import RecommendItem from "../components/RecommendItem";
import Footer from "../components/Footer";
import "../css/Theatre.css";

const Theatre = () => {
  return (
    <div>
      <Header />
      <MobileNavigator />
      <LaptopNavigator />
      <div className="theatre-title-container">
        <h1 className="theatre-title">연극</h1>
      </div>
      <div className="theatre-header">
        <div className="theatre-text-container">
          <h2 className="theatre-subtitle">랭킹</h2>
        </div>
        <div className="theatre-slider-container">
          <RankingSlider />
        </div>
      </div>
      <div className="theatre-article">
        <div>
          <h2 className="theatre-subtitle">추천 연극</h2>
        </div>
        <RecommendItem />
      </div>
      <ToTopButton />
      <Footer />
    </div>
  );
};

export default Theatre;
