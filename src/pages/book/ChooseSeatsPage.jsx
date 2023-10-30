import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";

import {setMyBookSeats} from "../../store/slice";
import "./ChooseSeatsPage.css";
import BookTitle from "../../components/book/BookTitle";
import seatImg from "../../img/seat.PNG";
import Loading from '../../styles/loading';
import utils from '../../utils'

// 임의 값
const MAX_ROW = 26; // 알파벳 최대 26개 이므로
const MAX_COL = 20;
const T_MAX_ROW = (MAX_ROW + 1);
const T_MAX_COL = (MAX_COL + 1);
const GRID_GAP = 2;
const MAX_CAN_RESERVE_CNT = 5;
const SEAT_DELIMITER = '@';

const Line = styled.hr`
  border: 0.1px solid #ecedfc;
`;

const SeatContainer = styled.div`
  //width: -webkit-fill-available;
  height: 80%;
  max-width: ${(props) => `${props.pwidth || 100}px`};
  max-height: ${(props) => `${props.pheight || 100}px`};
  display: grid;
  grid-template-rows: repeat(${(props) => props.maxrow || 1}, minmax(12px, auto));
  grid-template-columns: repeat(${(props) => props.maxcol || 1}, minmax(13px, auto));
  grid-auto-rows: 100px;
  text-align: center;
  grid-gap: ${GRID_GAP}px;
  box-sizing: border-box;
  justify-content: center;
`;

const Seat = styled.div`
  width: ${(props) => `(${props.width || 10} - ${GRID_GAP})px`};
  height: ${(props) => `(${props.height || 10} - ${GRID_GAP})px`};
  background-color: ${(props) => (props.canreserve === 1) ? "#00008BFF" : "#D37EB9FF"};
  display: flex;
  justify-content: center;
  align-items: center; 
  box-sizing: border-box;
  font-size: 0.4rem;
  &:hover {
    background-color: darkblue; 
    border: ${GRID_GAP}px outset darkblue;// 마우스 오버 시 배경색을 변경
    margin: -${GRID_GAP}px;
  }
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
  const bookDispatch = useDispatch();
  const state = useSelector((state) => state.booksData);

  // state에서 화면에 표시할 공연 정보 선언
  const { title, place } = state.showInfo[0];
  const { bookDate, bookShowTime, seats, bookShowTimeOrder } = state;
  const [loading, setLoading] = useState(true);
  const stageBackgroundRef = useRef(null);
  //const { count, leftSeats } = state.leftSeats[bookShowTimeOrder];

  const initialSeatsInfo = new Array((MAX_COL + 1) * (MAX_ROW + 1)).fill(0);
  const [displaySeatList, setDisplaySeatList] = useState(initialSeatsInfo);
  const choosedSeatListRef = useRef(new Array().fill(null));

  useEffect(() => {

  }, []);

  useEffect(() => {
    const stageBackgroundElement = stageBackgroundRef.current;

    // 극장 영역 완료전 오류 방지위한 체크
    if (stageBackgroundElement) {
      const width = stageBackgroundElement.offsetWidth;
      const height = stageBackgroundElement.offsetHeight;
      setLoading(false);
    }
  }, [loading, setLoading]);

  const handleChooseSeat = (key) => {
    console.log(">>> handleChooseSeat <<< ", key, typeof (key));

    if (typeof (key) === 'string') {
      const seatPosition = utils.getAboutDelimiter('F', SEAT_DELIMITER, key);
      console.log(seatPosition);

      const indexRow = parseInt(seatPosition[0], 10);
      const indexCol = parseInt(seatPosition[1], 10);

      // 좌석 선택 막는 조건
      // 1) 이미 선택한 자리, 한 명당 최대 5자리까지 예약 가능
      const fullySeatName = utils.getAboutDelimiter('B', SEAT_DELIMITER, indexRow, indexCol);
      if(choosedSeatListRef.current.includes(fullySeatName)) {
        console.log(choosedSeatListRef.current, fullySeatName);
        alert('이미 선택한 자리 입니다.');
        return;
      } else if(choosedSeatListRef.current.length >= MAX_CAN_RESERVE_CNT) {
        alert('최대 5자리까지 선택 가능 합니다.');
        return;
      }

      console.log("+++ ",key, typeof(key));
      choosedSeatListRef.current.push(key);

      const newDisplaySeatList = [...displaySeatList];
      newDisplaySeatList[(indexRow * T_MAX_COL) + indexCol] = 1;
      setDisplaySeatList(newDisplaySeatList);

      // 복사해서 안보내고 바로 choosedSeatListRef.current 보내면
      // Arrary.push() 할 때 에러남, Cannot add property 1, object is not extensible
      // TypeError: Cannot add property 1, object is not extensible
      const choosedSeatListTmp = [...choosedSeatListRef.current];
      bookDispatch(setMyBookSeats({myBookSeats : choosedSeatListTmp}));
    }
  }

  function configureSeats() {
    return (
      <SeatContainer
        maxcol={T_MAX_COL}
        maxrow={T_MAX_ROW}
        pwidth={stageBackgroundRef?.current?.offsetWidth}
        pheight={stageBackgroundRef?.current?.offsetHeight}
      >
        {displaySeatList.map((rowItems, idx) => {

          const indexRow = parseInt(idx / T_MAX_COL, 10);
          const indexCol = parseInt(idx % T_MAX_COL, 10);

          if ((indexCol === 0) && (indexRow === 0)) { // 첫행, 첫열은 공백 표시
            return <SeatTitle key={idx}></SeatTitle>
          } else if ((indexCol === 0) || (indexRow === 0)) { // 각행, 각열의 첫 시작 이름 표시
            if (indexCol === 0) { // 행 첫 시작은 알파벳(A~Z) 변환 표시를 위한 조건
              // let rowChar = 'A';
              // rowChar = String.fromCharCode((65 + indexRow) - 1); // 'A' 아스키 코드 65
              return <SeatTitle key={idx}>
                {utils.getAboutDelimiter('S', SEAT_DELIMITER, indexRow)}
              </SeatTitle>
            } else { // 열의 첫 시작은 숫자 그대로 표신
              return <SeatTitle key={idx}>{idx}</SeatTitle>
            }
          } else {
            if (loading) {
              <Loading />
            } else {
              return (
                <Seat key={utils.getAboutDelimiter('B', SEAT_DELIMITER, indexRow, indexCol)}
                  width={stageBackgroundRef?.current?.offsetWidth / T_MAX_COL}
                  height={stageBackgroundRef?.current?.offsetWidth / T_MAX_ROW}
                  canreserve={rowItems}
                  onClick={() =>
                    handleChooseSeat(utils.getAboutDelimiter('B', SEAT_DELIMITER, indexRow, indexCol))}
                >
                  {rowItems}
                </Seat>
              )
            }
          }
        })}
      </SeatContainer >
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
