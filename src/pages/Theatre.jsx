import React, { useEffect } from "react";
import RankingSlider from "../components/RankingSlider";
import Header from "../components/Header";
import LaptopNavigator from "../components/LaptopNavigator";
import MobileNavigator from "../components/MobileNavigator";
import "../css/Theatre.css";
import { useSelector } from "react-redux";
import { useRankingType } from "../store/RankingTypeContext";
import { useNavigate } from "react-router-dom";

const Theatre = () => {
  const theatres = useSelector((state) => state.theatres);
  const { setRankingType } = useRankingType();
  const navigator = useNavigate();

  useEffect(() => {
    setRankingType("theatre");
  });

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
        <div className="theatre-item-grid">
          {theatres.map((theatre, index) => (
            <div className="theatre-item-container" key={index}>
              <img
                onClick={() => navigator("/detailpage/" + theatre.id)}
                className="theatre-item"
                src={theatre.url}
                alt=""
              />
              <span className="theatre-item-title">{theatre.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Theatre;
