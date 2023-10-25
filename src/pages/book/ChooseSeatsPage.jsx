import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";

import { getShowInfoById } from "../../store/slice";
import "./ChooseSeatsPage.css";
import BookTitle from "../../components/book/BookTitle";
import seatImg from "../../img/seat.PNG";
import Loading from '../../styles/loading';

// 임의 값
const MAX_ROW = 25; // 알파벳 최대 26개 이므로
const MAX_COL = 20;
const T_MAX_ROW = (MAX_ROW + 1);
const T_MAX_COL = (MAX_COL + 1);
const GRID_GAP = 2;

const Line = styled.hr`
  border: 0.1px solid #ecedfc;
`;

const SeatContainer = styled.div`
  //width: -webkit-fill-available;
  height: 80%;
  max-width: ${(props) => `${props.pwidth || 100}px`};
  max-height: ${(props) => `${props.pheight || 100}px`};
  display: grid;
  grid-template-rows: repeat(${(props) => props.maxrow || 1}, minmax(10px, auto));
  grid-template-columns: repeat(${(props) => props.maxcol || 1}, minmax(10px, auto));
  grid-auto-rows: 100px;
  text-align: center;
  grid-gap: ${GRID_GAP}px;
  box-sizing: border-box;
  justify-content: center;
`;

const Seat = styled.div`
  width: ${(props) => `(${props.width || 10} - ${GRID_GAP})px`};
  height: ${(props) => `(${props.height || 10} - ${GRID_GAP})px`};
  background-color: violet;
  display: flex;
  justify-content: center;
  align-items: center; 
  box-sizing: border-box;
  font-size: 0.4rem;
`;

const SeatTitle = styled.div`
  //width: 10px;
  //height: 10px;
  color: black;
  justify-self: center;
  align-self: center;
  font-size: 0.4rem;
`

const ChooseSeatsPage = () => {
  const state = useSelector((state) => state.booksData);

  // state에서 화면에 표시할 공연 정보 선언
  const { title, place } = state.showInfo[0];
  const { bookDate, bookShowTime, seats, bookShowTimeOrder } = state;
  const displaySeats = new Array((MAX_COL + 1) * (MAX_ROW + 1)).fill(null);
  const [seatsList, setSeatsList] = useState();
  const [loading, setLoading] = useState(true);
  const stageBackgroundRef = useRef(null);
  //const { count, leftSeats } = state.leftSeats[bookShowTimeOrder];

  useEffect(() => {
    const stageBackgroundElement = stageBackgroundRef.current;

    if (stageBackgroundElement) {
      const width = stageBackgroundElement.offsetWidth;
      const height = stageBackgroundElement.offsetHeight;
      console.log(`너비: ${width}px, 높이: ${height}px`);
      setLoading(false);
    }
  }, [loading, setLoading]);

  const handleChooseSeat = () => {
    console.log(">>> handleChooseSeat <<<");
    /*
    if (seatsList[index] === null) {
      // 예약가능
    } else {
      // 예약 불가능
    }*/
  }

  function configureSeats() {
    return (
      <SeatContainer
        maxcol={T_MAX_COL}
        maxrow={T_MAX_ROW}
        pwidth={stageBackgroundRef?.current?.offsetWidth}
        pheight={stageBackgroundRef?.current?.offsetHeight}
      >
        {displaySeats.map((rowItems, idx) => {
          // console.log(`row === ${idx}`);
          // console.log(`size === ${displaySeats.length}`);
          // console.log(`width === ${stageBackgroundRef?.current?.offsetWidth / T_MAX_COL}`);
          // console.log(`height === ${stageBackgroundRef?.current?.offsetWidth / T_MAX_ROW}`);

          const indexRow = parseInt(idx / T_MAX_COL);
          const indexCol = parseInt(idx % T_MAX_COL);

          console.log(`row === ${indexRow},  ${indexCol}`);
          if ((indexCol === 0) && (indexRow === 0)) {
            return <SeatTitle key={idx}></SeatTitle>
          } else if ((indexCol === 0) || (indexRow === 0)) {
            console.log(`row title!!!!!!!! === ${idx}`);
            return <SeatTitle key={idx}>{idx}</SeatTitle>
          } else {
            if (loading) {
              <Loading />
            } else {
              return (
                <Seat key={idx}
                  width={stageBackgroundRef?.current?.offsetWidth / T_MAX_COL}
                  height={stageBackgroundRef?.current?.offsetWidth / T_MAX_ROW}
                  onClick={handleChooseSeat()}
                >
                  {/*`${idx},${indexRow}열 ${indexCol}번`*/}
                </Seat>
              )
            }
          }
        })}
      </SeatContainer>
    );
  }

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
        <div className="stageBackground" ref={stageBackgroundRef}>
          {configureSeats()}
        </div>
      </div>
    </div >
  );
};

export default ChooseSeatsPage;
