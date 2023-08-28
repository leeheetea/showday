import React from "react";
import banner1Url from "../img/banner1.png";
import banner2Url from "../img/banner2.png";
import banner3Url from "../img/banner3.png";
import banner4Url from "../img/banner4.png";
import banner5Url from "../img/banner5.png";
import banner6Url from "../img/banner6.png";
import "../css/LaptopBanner.css";
import { Link } from "react-router-dom";

const LaptopBanner = () => {
  const banner1 = { imgUrl: banner1Url, url: "1001" };
  const banner2 = { imgUrl: banner2Url, url: "1002" };
  const banner3 = { imgUrl: banner3Url, url: "1009" };
  const banner4 = { imgUrl: banner4Url, url: "1106" };
  const banner5 = { imgUrl: banner5Url, url: "1107" };
  const banner6 = { imgUrl: banner6Url, url: "1109" };
  const banners = [banner1, banner2, banner3, banner4, banner5, banner6];

  return (
    <div className="banner-container">
      {banners.map((banner, index) => (
        <Link key={banner.url} to={"detailpage/" + banner.url}>
          <div
            key={index}
            className="banner-img"
            style={{
              background: `url(${banner.imgUrl}) no-repeat center center`,
              backgroundSize: "cover",
            }}
          ></div>
        </Link>
      ))}
    </div>
  );
};

export default LaptopBanner;
