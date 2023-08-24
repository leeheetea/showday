import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jsonData from "../musicalData.json";
import { useNavigate } from "react-router-dom";
import "../css/ResponsiveSlider.css";

const ResponsiveSlider = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
  const navigator = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = jsonData
    .filter((state) => state.smallBannerUrl && state.smallBannerUrl !== "")
    .map((state) => ({
      bannerUrl: state.bannerUrl,
      url: state.smallBannerUrl,
      id: state.id,
    }));

  const images = isLargeScreen
    ? data.map((item) => ({ url: item.bannerUrl, id: item.id }))
    : data.map((item) => ({ url: item.url, id: item.id }));

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    centerMode: false,
    centerPadding: "500px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="responsive-slider-container">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index}>
            <img
              onClick={() => {
                navigator("/detailpage/" + item.id);
              }}
              className="responsive-slider"
              src={item.url}
              alt=""
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ResponsiveSlider;
