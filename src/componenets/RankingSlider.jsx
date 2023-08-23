import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../img/slide1.webp";
import img2 from "../img/slide2.webp";
import img3 from "../img/slide3.webp";
import img4 from "../img/slide4.webp";
import img5 from "../img/slide5.webp";
import img6 from "../img/slide6.webp";
import "../css/RankingSlider.css";

export default class RankingSlider extends Component {
  render() {
    const images = [img1, img2, img3, img4, img5, img6, img1, img2, img3, img4];
    var settings = {
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
          {images.map((image, index) => (
            <div className="ranking-slider-container" key={index}>
              <span className="ranking-text">{index + 1}</span>
              <div key={index}>
                <img className="ranking-slider" src={image} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
