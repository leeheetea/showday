import React, {useEffect, useState} from "react";
import "../css/LaptopBanner.css";
import { Link } from "react-router-dom";
import axios from "axios";


const LaptopBanner = () => {

  let page = 0;
  let size = 10;

  const [showItems, setShowItems] = useState([]);
  const url = "/show/small-banner"

  useEffect(()=>{
    fetchShowItem(page, size);
  },[]);

  const fetchShowItem = async (page, size) => {
    try {
      const response = await axios.get(url, {
        params: {
          page: page,
          size: size
        }
      });
      setShowItems(response.data);
      console.log("showItems", showItems.data);
    } catch (error) {
      alert("작은 배너 이미지 로딩 중 에러가 발생했습니다.")
    }
  };

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
