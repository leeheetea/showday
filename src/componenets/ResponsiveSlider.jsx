import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jsonData from "../musicalData.json";

import "../css/ResponsiveSlider.css";

export default class ResponsiveSlider extends Component {
  state = {
    isLargeScreen: window.innerWidth >= 768,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ isLargeScreen: window.innerWidth >= 768 });
  };

  render() {
    const defaultImages = jsonData
      .filter((state) => state.smallBannerUrl && state.smallBannerUrl !== "")
      .map((state) => state.smallBannerUrl);

    const largeScreenImages = jsonData
      .filter((state) => state.bannerUrl && state.bannerUrl !== "")
      .map((state) => state.bannerUrl);

    const images = this.state.isLargeScreen ? largeScreenImages : defaultImages;

    var settings = {
      dots: false,
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
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="responsive-slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img className="responsive-slider" src={image} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
