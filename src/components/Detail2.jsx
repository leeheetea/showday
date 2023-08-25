import React from "react";
import { useState } from "react";
import styled from "styled-components";
import "../css/DetailMain.css";
// import show from '../data'

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
`;

const Detail2 = (props) => {
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    {
      id: 1,
      name: "상세정보",
      content: <img className="detailImg" src={props.data.detail} alt="" />,
    },
    { id: 2, name: "관람후기", content: "내용2" },
    { id: 3, name: "기대평가", content: "내용3" },
    { id: 4, name: "장소정보", content: "내용4" },
    { id: 5, name: "예매/취소", content: "내용5" },
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
