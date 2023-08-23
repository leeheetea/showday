import React from "react";
import banner1 from "../img/banner1.png";
import banner2 from "../img/banner2.png";
import banner3 from "../img/banner3.png";
import banner4 from "../img/banner4.png";
import banner5 from "../img/banner5.png";
import banner6 from "../img/banner6.png";
import "../css/LaptopBanner.css";

const LaptopBanner = () => {
  const banner = [banner1, banner2, banner3, banner4, banner5, banner6];

  return (
    <div className="banner-container">
      {banner.map((imageSrc, index) => (
        <div
          key={index}
          className="banner-img"
          style={{
            background: `url(${imageSrc}) no-repeat center center`,
            backgroundSize: "cover",
          }}
        ></div>
      ))}
    </div>
  );
};

export default LaptopBanner;
