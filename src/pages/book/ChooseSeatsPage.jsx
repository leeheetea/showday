import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";

import { getShowInfoById } from "../../store/slice";
import "./ChooseSeatsPage.css";
import BookTitle from "../../components/book/BookTitle";
import seatImg from "../../img/seat.PNG";

const Line = styled.hr`
  border: 0.1px solid #ecedfc;
`;

const ChooseSeatsPage = () => {
  const state = useSelector((state) => state.booksData);

  // state에서 화면에 표시할 공연 정보 선언
  const { title, place } = state.showInfo[0];
  const { bookDate, bookShowTime } = state;

  useEffect(() => {}, []);

  return (
    <div className="chooseSeatsContainer">
      <BookTitle width="100%" isleft="true">
        {title}
      </BookTitle>
      <BookTitle width="100%" issubtitle="true" tpadding="10px">
        {place} | {bookDate}&nbsp;{bookShowTime}
      </BookTitle>
      <div className="stageContainer">
        {/* <span>STAGE</span> */}
        <div className="stageBackground">
          <div className="seatContainer">
            <img className="seat-img" src={seatImg} alt="seat" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSeatsPage;
