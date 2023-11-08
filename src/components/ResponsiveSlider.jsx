import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import "../css/ResponsiveSlider.css";
import axios from "axios";

const ResponsiveSlider = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
  const navigator = useNavigate();

  let page = 0;
  let size = 10;

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
  const url = "/show/banner";

  useEffect(() => {
    fetchShowItem(page, size);
  }, []);

  const fetchShowItem = async (page, size) => {
    try {
      const response = await axios.get(url, {
        params: {
          page: page,
          size: size,
        },
      });
      setShowItems(response.data);
      console.log("showItems", showItems.data);
    } catch (error) {
      alert("배너 이미지 로딩 중 에러가 발생했습니다.");
    }
  };

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
          <div key={item.url}>
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
