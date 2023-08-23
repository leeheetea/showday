import React from "react";
import RankingSlider from "../components/RankingSlider";
import Header from "../components/Header";
import LaptopNavigator from "../components/LaptopNavigator";
import MobileNavigator from "../components/MobileNavigator";
import "../css/Theatre.css";
import { useSelector } from "react-redux";
import { useRankingType } from "../store/RankingTypeContext";

const Theatre = () => {
  const theatres = useSelector((state) => state.theatres);
  const { rankingType, setRankingType } = useRankingType();
  setRankingType("theatre");

  return (
    <div>
      <Header />
      <MobileNavigator />
      <LaptopNavigator />
      <div className="theatre-title-container">
        <h1>연극</h1>
      </div>
      <div className="theatre-header">
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
          {theatres.map((theatre, index) => (
            <div className="theatre-item-container" key={index}>
              <img className="theatre-item" src={theatre.url} alt="" />
              <span className="theatre-item-title">{theatre.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Theatre;
