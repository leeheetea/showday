import RankingSlider from "../components/RankingSlider";
import Header from "../components/Header";
import LaptopNavigator from "../components/LaptopNavigator";
import MobileNavigator from "../components/MobileNavigator";
import "../css/Concert.css";
import { useSelector } from "react-redux";
import { useRankingType } from "../store/RankingTypeContext";
import { useNavigate } from "react-router-dom";

const Concert = () => {
  const concerts = useSelector((state) => state.concerts);
  const navigator = useNavigate();
  const { setRankingType } = useRankingType();
  setRankingType("concert");

  return (
    <div>
      <Header />
      <MobileNavigator />
      <LaptopNavigator />
      <div className="concert-title-container">
        <h1>콘서트</h1>
      </div>
      <div className="concert-header">
        <div className="concert-text-container">
          <h2>랭킹</h2>
        </div>
        <div className="concert-slider-container">
          <RankingSlider />
        </div>
      </div>
      <div className="concert-article">
        <div>
          <h2 className="concert-subtitle">추천 작품</h2>
        </div>
        <div className="concert-item-grid">
          {concerts.map((concert, index) => (
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
    </div>
  );
};

export default Concert;
