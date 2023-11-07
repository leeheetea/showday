import React, {useEffect, useState} from "react";
import "../css/LaptopBanner.css";
import { Link } from "react-router-dom";
import callAxios from "../util/callAxios";


const LaptopBanner = () => {

  const [showItems, setShowItems] = useState([]);
  const url = "/show/small-banner"

  useEffect(()=>{
    fetchShowItem();
  },[]);

  const fetchShowItem = async()=>{
    callAxios(url, setShowItems);
  }

  return (

    <div className="banner-container">
      {showItems.map((item, index) => (
        <Link key={item.smallBannerUrl} to={"detailpage/" + item.showId}>
          <div
            key={index}
            className="banner-img"
            style={{
              background: `url(${item.smallBannerUrl}) no-repeat center center`,
              backgroundSize: "cover",
            }}
          ></div>
        </Link>
      ))}
    </div>
  );
};

export default LaptopBanner;
