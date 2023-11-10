import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext, useParams } from "react-router-dom";

import { setBookInfo, setMyBookSeats } from "../../store/slice";
import "./ChooseSeatsPage.css";
import BookTitle from "../../components/book/BookTitle";
import seatImg from "../../img/seat.PNG";
import Loading from '../../styles/loading';
import utils from '../../utils'
import { callReadShow, callReadShowSeat, callReadVenueSeatSize } from "../../service/book/bookApiService";

// 임의 값
//const MAX_ROW = 26; // 알파벳 최대 26개 이므로
////const T_MAX_ROW = (MAX_ROW + 1);
//const T_MAX_COL = (MAX_COL + 1);
const GRID_GAP = 2;
const MAX_CAN_RESERVE_CNT = 5;
const SEAT_DELIMITER = '@';

const Line = styled.hr`
  border: 0.1px solid #ecedfc;
`;

const SeatContainer = styled.div`
  //width: -webkit-fill-available;
  height: 100%;
  max-width: ${(props) => `${props.pwidth || 100}px`};
  max-height: ${(props) => `${props.pheight || 100}px`};
  display: grid;
  grid-template-rows: repeat(${(props) => props.maxrow || 1}, minmax(20px, auto));
  grid-template-columns: repeat(${(props) => props.maxcol || 1}, minmax(30px, auto));
  grid-auto-rows: 100px;
  text-align: center;
  grid-gap: ${GRID_GAP}px;
  box-sizing: border-box;
  justify-content: center;
  align-content: center;
  background: antiquewhite;
`;

const Seat = styled.div`
  width: ${(props) => `(${props.width || 10} - ${GRID_GAP})px`};
  height: ${(props) => `(${props.height || 10} - ${GRID_GAP})px`};
  background-color: ${(props) => (props.canreserve) ? "#ffffff" : "#000000"};
  display: flex;
  justify-content: center;
  align-items: center; 
  box-sizing: border-box;
  font-size: 0.7rem;
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
  font-size: 0.8rem;
  font-weight: bold;
`

const ChooseSeatsPage = () => {
  const { id, index } = useParams();

  const bookDispatch = useDispatch();
  const state = useSelector((state) => state.booksData);

  // state에서 화면에 표시할 공연 정보 선언
  const { title, venueId, venueName } = state.showInfo;
  const { bookDate, bookShowTime, myBookSeats, bookShowTimeOrder } = state.bookingData;
  const [loading, setLoading] = useState(true);
  const stageBackgroundRef = useRef(null);
  //const { count, leftSeats } = state.leftSeats[bookShowTimeOrder];

  //const [showSeaㅇtsList, setShowSeatsList] = useState(null);
  const [displaySeatList, setDisplaySeatList] = useState(new Array());
  const seatInfoListRef = useRef(new Array().fill(null)); // 서버에서 가져온 전체 좌석 리스트
  const reserveSeatInfoListRef = useRef(new Array().fill(null)); // 공연에대한 좌석가능여부 예약담긴 정보
  const choosedSeatListRef = useRef(new Array().fill(null)); // 선택된 좌석의 리스트(예매정보 표시 업데이트용)
  const maxColRowInfoRef = useRef({ maxCol: null, maxRow: null });

  useEffect(() => {
    loadShowDataFromServer();
  }, []);

  const loadShowDataFromServer = async () => {
    // 극장id로 극장 Row, col 사이즈 가져오기
    callReadVenueSeatSize(venueId).then((venueSeatInfo) => {
      console.log('*** venue Info : ', venueSeatInfo);

      if (venueSeatInfo !== null && venueSeatInfo !== undefined) {
        maxColRowInfoRef.current = {
          maxCol: venueSeatInfo.seatMaxColumn + 1,
          maxRow: venueSeatInfo.seatMaxRow + 1
        };

        let replacedBookDate = bookDate.replaceAll('.', '-');
        let replacedBookTime =
          !utils.checkTimeStringFor(bookShowTime) && bookShowTime + ":00";

        seatInfoListRef.current = venueSeatInfo; // 서버에서 가져온 정보 백업

        // 좌석의 예약 상태 확인용 서버 호출
        callReadShowSeat(id, { "date": replacedBookDate, "time": replacedBookTime })
          .then((res, index) => {
            if (res !== null && res !== undefined) {
              reserveSeatInfoListRef.current = res;
              console.log("예약 상태 확인용 서버 호출 : ", res);

              // 정보변경(타이틀 정보 포함하도록 리스트 구성  변경
              setDisplaySeatList((prevItems) => {
                //console.log("!!! SEATDISPLAY prevItems: ", prevItems, maxColRowInfoRef.current);
                let newDisplaySeatList = [...prevItems];
                newDisplaySeatList = new Array(maxColRowInfoRef.current.maxCol * maxColRowInfoRef.current.maxRow).fill(1);

                let seatCount = 0 //res.length;
                // 타이틀과 아닌 부분 구분해서 데이터 저장
                if (newDisplaySeatList) {
                  newDisplaySeatList = newDisplaySeatList.map((item, index) => {
                    //console.log(">>> maxColRowInfoRef.current.maxCol : ", maxColRowInfoRef.current.maxCol);
                    if ((index < maxColRowInfoRef.current.maxCol) || (index % maxColRowInfoRef.current.maxCol === 0)) { // 첫번째 Row줄  
                      return null;
                    } else {
                      // console.log("OMG", res, seatCount, res[seatCount], newDisplaySeatList);
                      return res[seatCount++];
                    }

                  });
                  console.log("==== ", newDisplaySeatList);
                } else {
                  console.log("newDisplaySeatList 정보가 없음 false..");
                }
                return newDisplaySeatList;
              })
            } else {
              console.log(">>> 공연 스케쥴 해당 좌석 예매 여부 가져오기 실패");
            }
          })
      } else {
        console.log(">>> 극장 좌석 최대 가로, 세로 크기 가져오기 실패");
      }
    })
  }



  useEffect(() => {
    setLoading((!displaySeatList === null));
  }, [displaySeatList])

  useEffect(() => {
    const stageBackgroundElement = stageBackgroundRef?.current;
    // 극장 영역 완료전 오류 방지위한 체크
    if (stageBackgroundElement) {
      const width = stageBackgroundElement.offsetWidth;
      const height = stageBackgroundElement.offsetHeight;
      setLoading(false);
    }
  }, [loading, setLoading]);

  const handleChooseSeat = (idx, seatId) => {
    console.log('handleChooseSeatTemp 잘 탑니다!!!!!!!');
    //console.log('handleChooseSeatTemp seatInfo : ', seatInfo);
    console.log('handleChooseSeatTemp seatId : ', seatId);

    //if (seatInfo) {
    //const seatPosition = utils.getAboutDelimiter('F', SEAT_DELIMITER, key);
    //console.log(seatPosition);

    // 좌석 선택 막는 조건
    // 1) 이미 선택한 자리, 한 명당 최대 5자리까지 예약 가능
    if (choosedSeatListRef.current.includes(seatId)) {
      //console.log(choosedSeatListRef.current, fullySeatName);
      alert('이미 선택한 자리 입니다.');
      return;
    } else if (choosedSeatListRef.current.length >= MAX_CAN_RESERVE_CNT) {
      alert('최대 5자리까지 선택 가능 합니다.');
      return;
    }

    choosedSeatListRef.current.push(seatId);

    const newDisplaySeatList = [...displaySeatList];
    newDisplaySeatList[idx] = false;
    setDisplaySeatList(newDisplaySeatList);

    // 복사해서 안보내고 바로 choosedSeatListRef.current 보내면
    // Arrary.push() 할 때 에러남, Cannot add property 1, object is not extensible
    // TypeError: Cannot add property 1, object is not extensible
    const choosedSeatListTmp = [...choosedSeatListRef.current];
    bookDispatch(setMyBookSeats({ myBookSeats: choosedSeatListTmp }));
    //}
  }

  function configureSeats() {
    return (
      <SeatContainer
        maxcol={maxColRowInfoRef.current.maxCol}
        maxrow={maxColRowInfoRef.current.maxRow}
        pwidth={stageBackgroundRef?.current?.offsetWidth}
        pheight={stageBackgroundRef?.current?.offsetHeight}
      >
        {displaySeatList?.map((rowItems, idx) => {

          const indexRow = parseInt(idx / maxColRowInfoRef.current.maxCol, 10);
          const indexCol = parseInt(idx % maxColRowInfoRef.current.maxCol, 10);

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
            // if (loading) {
            //   <Loading />
            // } else {
            //console.log('>>> displaySeats rowItems.seatId : ', rowItems);
            return (
              <Seat
                // key={rowItems.seatId}
                key={idx}
                width={stageBackgroundRef?.current?.offsetWidth / maxColRowInfoRef.current.maxCol}
                height={stageBackgroundRef?.current?.offsetWidth / maxColRowInfoRef.current.maxRow}
                canreserve={rowItems?.canReservation?.toString()}
                onClick={() => handleChooseSeat(idx, rowItems?.showSeatId)}
              >
                {/* {rowItems?.showSeatId}/{rowItems?.canReservation === true ? 1 : 0} */}
              </Seat>
            )
            // }
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
        {venueName} | {bookDate.split('T')[0]}&nbsp;{bookShowTime}
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
