import React from "react";
import styled from "styled-components";

import "./ChooseSeatsPage.css";
import BookTitle from "../../components/book/BookTitle";

const Line = styled.hr`
  border: 0.1px solid #ecedfc;
`;

const ChooseSeatsPage = () => {
  const SEATS_COLUMN_SIZE = 10;
  let seats = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  return (
    <div className='chooseSeatsContainer'>
      <BookTitle width='100%' isleft='true'>[기획공연] 뮤지컬 '사랑은 아름다워'-광주</BookTitle>
      <BookTitle width='100%' issubtitle='true' tpadding='10px'>링크아트센터 벅스홀 | 2023.08.31(목) 19:30</BookTitle>
      <div className='stageContainer'>
        <span>STAGE</span>
        <div className="stageBackground">
          <div className="seatContainer">
            {seats.map((seat, idx) => {
              return seat.map((s, idx) => {
                return <div key={idx} className="seat">{idx}</div>;
              });
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSeatsPage;
