import React, { useEffect } from "react";
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
  const id = useOutletContext();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.booksData);

  // state에서 화면에 표시할 공연 정보 선언
  const { title, place } = state.showInfo[0];
  const { bookDate, bookShowTime } = state;

  useEffect(() => {
    //  dispatch(getShowInfoById({ id: id }));
    //  console.log('(ChooseSeatsPage) info : ', state);
  }, []);

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
            {/*    {seats.map((seat, idx) => {
              return seat.map((s, idx) => {
                return <div key={idx} className="seat">{idx}</div>;
              });
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSeatsPage;
