import React, { useEffect, useState, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/RankingSlider.css";
import { useRankingType } from "../store/RankingTypeContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RankingSlider = () => {
  const navigator = useNavigate();
  let page = 0;
  let size = 10;

  const [musicals, setMusicals] = useState([]);
  const [concerts, setConcerts] = useState([]);
  const [theatres, setTheatres] = useState([]);

  useEffect(() => {
    const fetchShow = async () => {
      const url = "http://localhost/show";
      try {
        const response = await axios.get(url, {
          params: {
            type: 'musical',
            page: page,
            size: size
          }
        });
        console.log("musical", response.data)
        setMusicals(response.data);
      } catch (error) {
        console.error('musical 정보 호출에 에러가 발생함.', error);
      }
      try {
        const response = await axios.get('/show', {
          params: {
            type: 'concert',
            page: page,
            size: size
          }
        });
        setConcerts(response.data);
        console.log("concert", response.data)
      } catch (error) {
        console.error('concert 정보 호출에 에러가 발생함.', error);
      }
      try {
        const response = await axios.get('/show', {
          params: {
            type: 'theatre',
            page: page,
            size: size
          }
        });
        setTheatres(response.data);
        console.log("theatre", response.data)
      } catch (error) {
        console.error('Theatres 정보 호출에 에러가 발생함.', error);
      }
    };
    fetchShow();
  }, []);

  const musicalItems = useMemo(
    () => musicals.map((musical) => ({ url: musical.thumbnailUrl, id: musical.showId })),
    [musicals]
  );
  const concertItems = useMemo(
    () => concerts.map((concert) => ({ url: concert.thumbnailUrl, id: concert.showId })),
    [concerts]
  );
  const theatreItems = useMemo(
    () => theatres.map((theatre) => ({ url: theatre.thumbnailUrl, id: theatre.showId })),
    [theatres]
  );

  const [slideData, setSlidData] = useState(musicalItems);
  const { rankingType } = useRankingType();

  useEffect(() => {
    switch (rankingType) {
      case "musical":
        setSlidData(musicalItems);
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
        {/* 데이터가 로드되기 전에는 슬라이더를 렌더링하지 않음 */}
        {slideData.length > 0 && (
            <Slider {...settings}>
              {slideData.slice(0, 10).map((data, index) => (
                  <div className="ranking-slider-item" key={data.id}>
                    <span className="ranking-text">{index + 1}</span>
                    <div>
                      <img
                          onClick={() => navigator("/detailpage/" + data.id)}
                          className="ranking-slider"
                          src={data.url}
                          alt={`Show ${index + 1}`}
                      />
                    </div>
                  </div>
              ))}
            </Slider>
        )}
      </div>
  );

};

export default RankingSlider;
