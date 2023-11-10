import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import moment from "moment";
import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";

import { setBookDateTime } from '../../store/slice'
import LineContainer from "../../components/LineContainer";
import BookTitle from "../../components/book/BookTitle";
import theme from "../../styles/theme";
import "./ChangeDatePage.css";
import utils from '../../utils'
import { callReadShowSeat } from "../../service/book/bookApiService";

const StepSpan = styled.span`
  color: ${theme.accentLightColor};
`;
const FormCheckLeft = styled.input.attrs({ type: "radio" })`
  &:checked {
    display: inline-block;
    background: none;
    padding: 0px 10px;
    text-align: center;
    height: 35px;
    line-height: 33px;
    font-weight: 500;
    display: none;
  }
  &:checked {
    background: black;
    color: #fff;
  }
  display: none;
`;

const ChangeDatePage = ({ onChangeDate }) => {
  const { id } = useParams();
  const navigator = useNavigate();
  const bookDispatch = useDispatch();
  const state = useSelector((state) => state.booksData);
  const minDateRef = useRef(new Date());
  const timesRef = useRef({});
  const [choosedShowDate, setChoosedShowDate] = useState(new Date());
  const [choosedShowTime, setChoosedShowTime] = useState(null);
  const [showScheduleList, setShowScheduleList] = useState(null); // 서버에서 받아온 id 포함 전체 스케쥴 정보
  const showScheduleListRef = useRef(new Array()); // 시간 정보만 뽑아낸 리스트(표시용)
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);
  const [reserveSeatCount, setReserveSeatCount] = useState(0); // 회차별 좐여석 카운팅 저장
  const [isTimeClear, setIsTimeClear] = useState(false);

  const { showTime } = state.showInfo;
  const { bookDate, bookShowTime, seats } = state.bookingData;

  useEffect(() => {
    // 화면 로딩시 첫 화면 렌더링 조건들 
    console.log('[ChangeDatePage][load] bookDate : ', bookDate);
    setChoosedShowDate(new Date(bookDate)); // 예약되어 있는 날짜로 세팅
    setSelectedTimeIndex(bookShowTime);
    setChoosedShowTime(bookShowTime);
    console.log(showTime, choosedShowTime, bookShowTime, seats);
  }, []);

  useEffect(() => {
    getShowScheduleList();
  }, [choosedShowDate]);

  /* 날짜 선택이 변경 될때 이벤트 */
  const handleChangedDate = (date) => {
    setChoosedShowDate(date);
    setChoosedShowTime(null);
  };

  /* 회차 선택 될때 이벤트 */
  const handleChooseTime = useCallback((time, index) => {
    if (choosedShowDate) {
      setSelectedTimeIndex(index);
      bookDispatch(setBookDateTime({
        choosedShowDate: choosedShowDate.getTime(),
        choosedShowTime: time,
        bookShowTimeOrder: (selectedTimeIndex)
      }
      ));
      // 잔여석 조회 호출
      getRemainingSeats();
    }
  }, [choosedShowDate, choosedShowTime]);

  /* 잔여석 조회 표시 */
  const getRemainingSeats = () => {

    let replacedBookDate = bookDate.replaceAll('.', '-');
    let replacedBookTime =
      !utils.checkTimeStringFor(bookShowTime) && bookShowTime + ":00";

    // 좌석의 예약 상태 확인용 서버 호출
    callReadShowSeat(id, { "date": replacedBookDate, "time": replacedBookTime })
      .then((res, index) => {
        console.log(res, index);
        const canReservationSeats = res.filter(item => (item.canReservation === true));
        console.log('canReservationSeats.length : ', canReservationSeats.length, canReservationSeats.count);
        setReserveSeatCount(canReservationSeats.length);
      })

  }

  const getShowScheduleList = async () => {
    var tempDate = new Date(choosedShowDate);
    tempDate.setDate(tempDate.getDate() + 1);
    const targetDate = tempDate.toISOString().split('T')[0];
    console.log(">>> scheduleDate List targetDate : ", targetDate);

    // 필요한 회차 목록만 가져옴
    // 필요한 회차 목록만 가져옴
    const showSchedules = await state?.showInfo?.showSchedules;

    if (showSchedules !== null && showSchedules !== undefined) {
      const filteredData = showSchedules.filter(item => item.scheduleDate === targetDate);
      setShowScheduleList(filteredData); // 스케줄 전체 정보 포함 리스트
      //console.log("스케쥴 전체 리스트 가져오기 !!! ", showScheduleList);
      // 회차 정보만 리스트 업데이트
      const schedules = new Array();
      filteredData.map((schedule) => {
        schedules.push(schedule.scheduleTime.slice(0, -3));
      })

      console.log("------------------> ", schedules);
      showScheduleListRef.current = schedules;
    } else {
      console.log("회차 목록 가져오기 실패");
    }
  };


  return (
    <div className="changeDateContainer">
      <div className="topContainer">
        <LineContainer width="40%" height="380px" isfrontcenter="true">
          <BookTitle isBottomLine>
            <StepSpan>STEP1</StepSpan>&nbsp;날짜선택
          </BookTitle>
          <div>
            <Calendar
              onChange={handleChangedDate}
              minDate={new Date()}
              value={choosedShowDate}
            />
          </div>
        </LineContainer>
        <LineContainer width="30%" height="380px" isfrontcenter="true">
          <BookTitle isBottomLine>
            <StepSpan>STEP2&nbsp;</StepSpan>
            회차선택
          </BookTitle>
          {showScheduleListRef.current.map((time, index) => (
            // <LineContainer linecolor="black" cursor='pointer'
            //   bgcolor={bookShowTime.indexOf(time) !== -1 && choosedShowTime ? 'black' : 'white'}
            //   txtcolor={bookShowTime.indexOf(time) !== -1 && choosedShowTime ? 'white' : 'black'}>
            <ul className={`timeInfoUl ${selectedTimeIndex === index ? 'selected' : ''}`}
              key={index}
              onClick={() => handleChooseTime(time, index)}>
              <li className="textLine" >
                <span className="textLeft">{index + 1}회</span>
                <span className="textRight">{time}</span>
              </li>
            </ul>
          ))}
        </LineContainer>
        <LineContainer width="30%" height="380px" isfrontcenter="true">
          <BookTitle isBottomLine>잔여석</BookTitle>
          <ul>
            <li className="textLine">
              <span span className="textLeft">R석</span>
              <span className="textRight">
                {reserveSeatCount}
              </span>
            </li>
          </ul>
        </LineContainer>
      </div>
    </div>
  );
};

export default ChangeDatePage;
