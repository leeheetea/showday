import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../img/slide1.webp";
import "../css/RankingSlider.css";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useRankingType } from "../store/RankingTypeContext";
import { useNavigate } from "react-router-dom";

const RankingSlider = () => {
  const navigator = useNavigate();

  const musicals = useSelector((state) => state.musicals);
  const concerts = useSelector((state) => state.concerts);
  const theatres = useSelector((state) => state.theatres);

  const musicalItems = useMemo(
    () => musicals.map((musical) => ({ url: musical.url, id: musical.id })),
    [musicals]
  );
  const concertItems = useMemo(
    () => concerts.map((concert) => ({ url: concert.url, id: concert.id })),
    [concerts]
  );
  const theatreItems = useMemo(
    () => theatres.map((theatre) => ({ url: theatre.url, id: theatre.id })),
    [theatres]
  );

  const [slideData, setSlidData] = useState([img1]);
  const { rankingType } = useRankingType();

  useEffect(() => {
    switch (rankingType) {
      case "musical":
        setSlidData(musicalItems);
        console.log("rankingType:", rankingType);
        break;
      case "concert":
        setSlidData(concertItems);
        break;
      default:
        setSlidData(theatreItems);
        break;
    }
  }, [rankingType, musicalItems, concertItems, theatreItems]);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 2048,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="ranking-slider-container">
      <Slider {...settings}>
        {slideData.map((data, index) => (
          <div className="ranking-slider-container" key={index}>
            <span className="ranking-text">{index + 1}</span>
            <div
              onClick={() => navigator("/detailpage/" + data.id)}
              key={index}
            >
              <img className="ranking-slider" src={data.url} alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RankingSlider;
