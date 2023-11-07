import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import "../css/ResponsiveSlider.css";
import callAxios from "../util/callAxios";

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

  const [showItems, setShowItems] = useState([]);
  const url = "/show/banner"

  useEffect(()=>{
    fetchShowItem();
  },[]);

  const fetchShowItem = async()=>{
    callAxios(url, setShowItems);
  }

  const images = isLargeScreen
    ? showItems.map((item) => ({ url: item.bannerUrl, id: item.showId }))
    : showItems.map((item) => ({ url: item.smallBannerUrl, id: item.showId }));

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
                navigator(`/detailpage/${item.id}`);

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
