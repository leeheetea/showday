import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from 'react-router-dom';

import { getShowInfoById } from '../../store/slice'
import "./ChooseSeatsPage.css";
import BookTitle from "../../components/book/BookTitle";

const Line = styled.hr`
  border: 0.1px solid #ecedfc;
`;

const ChooseSeatsPage = () => {
  // const id = useOutletContext();
  // const dispatch = useDispatch();
  const state = useSelector((state) => state.booksData);

  // state에서 화면에 표시할 공연 정보 선언
  const { title, place } = state.showInfo[0];
  const { bookDate, bookShowTime, seats, bookShowTimeOrder } = state;
  const displaySeats = new Array(200).fill(null);
  const [seatsList, setSeatsList] = useState();
  //const { count, leftSeats } = state.leftSeats[bookShowTimeOrder];

  useEffect(() => {
    //  dispatch(getShowInfoById({ id: id }));
    //console.log('(ChooseSeatsPage) seats : ', seats.leftSeats[bookShowTimeOrder].bookSeats, bookShowTimeOrder);
  }, []);

  const handleChooseSeats = (index) => {
    if (seatsList[index] === null) {
      // 예약가능
    } else {
      // 예약 불가능
    }
  }

  return (
    <div className='chooseSeatsContainer'>
      <BookTitle width='100%' isleft='true'>{title}</BookTitle>
      <BookTitle width='100%' issubtitle='true' tpadding='10px'>
        {place} | {bookDate}&nbsp;{bookShowTime}
      </BookTitle>
      <div className='stageContainer'>
        <span>STAGE</span>
        <div className="stageBackground">
          <div className="seatContainer">
            {displaySeats.map((seat, idx) => {
              //seats.leftSeats[bookShowTimeOrder].bookSeats
              return <div key={idx} className="seat" onClick={handleChooseSeats}></div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSeatsPage;
