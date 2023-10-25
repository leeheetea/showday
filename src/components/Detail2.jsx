import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import "../css/DetailMain.css";
import img1 from "../img/reviewPage.PNG"
import img3 from "../img/mapPage.PNG"
import img4 from "../img/cancel.PNG"
import callAxios from "../util/callAxios";
import Review from "./Review";

const TabMenuContainter = styled.ul`
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;
  margin-top: 10px;
  text-align: center;
  padding-left: 5px;
  min-width: 28rem;
  }

  .submenu {
    //기본 Tabmenu
    width: calc(100% / 5);
    padding: 10px;
    font-size: 15px;
    transition: 0.5s;
    text-align: center;
    border-radius: 10px 10px 0px 0px;
    border-bottom: 1px solid purple;
  }
  .submenu:hover {
    cursor: pointer;
  }
  .focused {
    //선택된 Tabmenu
    border: 1px solid purple;
    border-bottom: none;
  }
`;

const DetailContainer = styled.div`
  text-align: center;
  width: 1000px;
  @media screen and (max-width: 800px) {
    width:500px;
  }
`;




const Detail2 = (props) => {
  const [currentTab, clickTab] = useState(0);
  
  const [showItems, setShowItems] = useState([]);
  
  const showId = props.data.id;
  // const showId = 1;
  const url = "/show/"+showId;
  
  useEffect(()=>{ 
    fetchShowItem();
  },[showId]);

  const fetchShowItem = async()=>{
    callAxios(url, setShowItems);
  }

  const menuArr = [
    { id: 1,
      name: "상세정보",
      content: <div>
      {(showItems.contentDetail|| []).map((url, index) => (
        <img className="detailImg" src={url} style={{width:"90%"}} alt="" key={index} />
      ))}
    </div>},
    { id: 2, 
      name: "관람후기", 
      content: <Review/> , },
    { id: 3, 
      name: "장소정보", 
      content: <img className="mapPage" src={img3} style={{width:"100%"}}  alt="" /> },
    { id: 4, 
      name: "예매/취소", 
      content: <img className="cancel" src={img4}  style={{width:"100%"}}  alt="" /> },
  ];

  const selectMenuHandler = (index) => {
    clickTab(index);
  };

  return (
    <>
      <DetailContainer>
        <TabMenuContainter>
          {menuArr.map((el, index) => (
            <li
              key={index}
              className={index === currentTab ? "submenu focused" : "submenu"}
              onClick={() => selectMenuHandler(index)}
            >
              {el.name}
            </li>
          ))}
        </TabMenuContainter>
        <div>{menuArr[currentTab].content}</div>
      </DetailContainer>
    </>
  );
};
export default Detail2;
