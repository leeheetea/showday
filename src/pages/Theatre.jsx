import React, { useEffect } from "react";
import RankingSlider from "../components/RankingSlider";
import Header from "../components/Header";
import LaptopNavigator from "../components/LaptopNavigator";
import MobileNavigator from "../components/MobileNavigator";
import "../css/Theatre.css";
import { useSelector } from "react-redux";
import { useRankingType } from "../store/RankingTypeContext";
import { useNavigate } from "react-router-dom";
import ToTopButton from "../components/ToTopButton ";

const Theatre = () => {
  const theatres = useSelector((state) => state.theatres);
  const sortedTheatres = [...theatres].sort((a, b) =>
    a.title.localeCompare(b.title)
  );
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
          {sortedTheatres.map((theatre, index) => (
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
      <ToTopButton />
    </div>
  );
};

export default Theatre;
