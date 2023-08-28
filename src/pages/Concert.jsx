import React, { useEffect } from "react";
import RankingSlider from "../components/RankingSlider";
import Header from "../components/Header";
import LaptopNavigator from "../components/LaptopNavigator";
import MobileNavigator from "../components/MobileNavigator";
import "../css/Concert.css";
import { useSelector } from "react-redux";
import { useRankingType } from "../store/RankingTypeContext";
import { useNavigate } from "react-router-dom";
import ToTopButton from "../components/ToTopButton ";

const Concert = () => {
  const concerts = useSelector((state) => state.concerts);
  const sortedConcerts = [...concerts].sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  const navigator = useNavigate();
  const { setRankingType } = useRankingType();

  useEffect(() => {
    setRankingType("concert");
  });

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
        <div className="concert-item-grid">
          {sortedConcerts.map((concert, index) => (
            <div className="concert-item-container" key={index}>
              <img
                onClick={() => navigator("/detailpage/" + concert.id)}
                className="concert-item"
                src={concert.url}
                alt=""
              />
              <span className="concert-item-title">{concert.title}</span>
            </div>
          ))}
        </div>
      </div>
      <ToTopButton />
    </div>
  );
};

export default Concert;
