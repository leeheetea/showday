import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import moment from "moment";
import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import LineContainer from "../../components/LineContainer";
import BookTitle from "../../components/book/BookTitle";
import theme from "../../styles/theme";
import "./ChangeDatePage.css";

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
  const dispatch = useDispatch();
  const state = useSelector((state) => state.booksData);
  const timesRef = useRef({});
  const [selectedValue, setSelectedValue] = useState(new Date());
  const [choosedShowTime, setChoosedShowTime] = useState(selectedValue);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);
  const [isTimeClear, setIsTimeClear] = useState(false);

  const { showTime } = state.showInfo[0];
  const { bookDate, bookShowTime, seats } = state;

  useEffect(() => {
    setSelectedValue(new Date(bookDate)); // 예약되어 있는 날짜로 세팅
    console.log(showTime, choosedShowTime, bookShowTime, seats);
  }, []);

  /* 날짜 선택이 변경 될때 이벤트 */
  const handleChangedDate = (e) => {
    setSelectedValue(e);
    setChoosedShowTime(null);
  };

  /* 회차선택 */
  const handleChooseTime = (index) => {
    setSelectedTimeIndex(index);
    console.log(showTime, choosedShowTime, bookShowTime, seats);
    console.log(showTime.filter((value) => value === choosedShowTime));
    //setSelectedValue(e);
    //setChoosedShowTime(null);
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
              value={selectedValue}
              minDate={new Date()}
              formatDay={(locale, date) => moment(date).format("DD")}
            />
          </div>
        </LineContainer>
        <LineContainer width="30%" height="380px" isfrontcenter="true">
          <BookTitle isBottomLine>
            <StepSpan>STEP2&nbsp;</StepSpan>
            회차선택
          </BookTitle>
          {showTime &&
            showTime.map((time, index) => (
              // <LineContainer linecolor="black" cursor='pointer'
              //   bgcolor={bookShowTime.indexOf(time) !== -1 && choosedShowTime ? 'black' : 'white'}
              //   txtcolor={bookShowTime.indexOf(time) !== -1 && choosedShowTime ? 'white' : 'black'}>
              <ul
                className={`timeInfoUl ${
                  selectedTimeIndex === index ? "selected" : ""
                }`}
                key={index}
                onClick={() => handleChooseTime(index)}
              >
                <li className="textLine">
                  <span className="textLeft">{index + 1}회</span>
                  <span className="textRight">{time}:00</span>
                </li>
                <li className="textLine">
                  <span className="textLeft">
                    {
                      /* 배우 정보는 변화만 보여주고자 넣은 임시 코드 */
                      selectedValue.getDate() % 2 === 0
                        ? "유승현, 최수진, 유성재, 청호준, 박세훈, 성재, 정종환, 박상선, 신요셉"
                        : "성재, 정종환, 박상선, 신요셉"
                    }
                  </span>
                </li>
              </ul>
            ))}
        </LineContainer>
        <LineContainer width="30%" height="380px" isfrontcenter="true">
          <BookTitle isBottomLine>잔여석</BookTitle>
          <ul>
            <li className="textLine">
              <span className="textLeft">R석</span>
              <span className="textRight">{seats.leftSeats[selectedTimeIndex]}</span>
            </li>
            {/*   
              현재는 R석만 있는 가정
              <li className="textLine">
              <span className="textLeft">전체</span>
              <span className="textRight">234석</span>
            </li> */}
          </ul>
        </LineContainer>
      </div>
    </div>
  );
};

export default ChangeDatePage;
