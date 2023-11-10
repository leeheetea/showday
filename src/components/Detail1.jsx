import React, { useState, useEffect, useReducer, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "../css/DetailMain.css";
import { useNavigate } from "react-router-dom";
import { setBookInfo, setBookStep, setShowInfo } from "../store/slice";
import { callReadShow } from "../service/book/bookApiService";
import utils from "../utils";

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;

  border: 1.5px solid gray;
  border-radius: 5px;
  padding: 10px;
  min-width: 28rem;

  .detailBox {
    width: 500px;
  }
  .detailTitle {
    color: red;
  }
  hr {
    width: 100%;
    padding: 0;
    margin: 0 2rem 0 2rem;
  }

  input {
    margin-bottom: 2rem;
  }
  input,
  label {
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    width: 80%;
    flex-direction: column;
    padding: 2rem;

    hr {
      width: 100%;
      padding: 0;
      margin: 2rem 0 2rem 0;
    }

    .detailBox2 {
      padding: 0;
    }
    .inputRadioCheck {
      padding: 0;
    }
    .detailBox2 {
      width: 100%;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  button {
    border: none;
    background: purple;
    color: white;
    border-radius: 5px;
    margin: 10px 0;
    padding: 0.7rem 3.5rem;
    cursor: pointer;
  }
  button:hover {
    background-color: black;
  }
`;
const FormCheckText = styled.span`
  font-size: 20px;
  height: 3rem;
  background: #e6e6e6;
  border-radius: 50px;
  border: none;
  align-items: center;
  cursor: pointer;
  color: #777;
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
  &:checked + ${FormCheckText} {
    background: black;
    color: #fff;
  }
  display: none;
`;

const Detail1 = (props) => {
  const state = useSelector((state) => state.booksData);

  const navigator = useNavigate();

  const bookDispatch = useDispatch();
  const [choosedShowDate, setChoosedShowDate] = useState(new Date());
  const [choosedShowTime, setChoosedShowTime] = useState(null);

  const [showScheduleList, setShowScheduleList] = useState(null); // 서버에서 받아온 id 포함 전체 스케쥴 정보
  const showScheduleListRef = useRef(new Array()); // 시간 정보만 뽑아낸 리스트(표시용)
  const showScheduleTimeIdRef = useRef(0);  // id 저장용

  useEffect(() => {
    getShowScheduleList();
  }, [choosedShowDate]);

  //console.log("화면갱신!!! ", showScheduleList);
  /* 날짜 선택이 변경 될때 이벤트 */
  const handleChangedDate = (date) => {
    setChoosedShowDate(date);
    //console.log("date changed!!111111 : ", date);
  }

  /* 예매하기 버튼 선택 클릭 이벤트 */
  const handleClickBookBtn = () => {
    // 회차 선택 여부 체크
    if (choosedShowTime === null) {
      alert("관람을 원하시는 공연 시간(회차)을 선택해주세요.");
      return;
    } else {
      // 선택된 회차의 회차 아이디 가져오기
      let choosedShowTimeId = showScheduleTimeIdRef.current;
      //console.log(">>> 예매버튼 선택!! ", choosedShowDate, choosedShowTime, choosedShowTimeId);

      const tempChoosedShowDate = moment(choosedShowDate)
        .format("YYYY-MM-DD");
      // 현재 뮤지컬 정보를 예약정보 업데이트
      bookDispatch(setBookInfo({ tempChoosedShowDate, choosedShowTime, choosedShowTimeId }));
      bookDispatch(setBookStep({ bookStep: 2 }));
      navigator("/book/" + props.data + "/2");
    }
  };

  const getShowScheduleList = async () => {
    var tempDate = new Date(choosedShowDate);
    tempDate.setDate(tempDate.getDate() + 1);
    const targetDate = tempDate.toISOString().split('T')[0];
    //console.log(">>> scheduleDate List targetDate : ", targetDate);

    // 필요한 회차 목록만 가져옴
    const showSchedules = await state?.showInfo?.showSchedules;
    // 필요한 회차 목록만 가져옴

    if (Array.isArray(showSchedules)) {
      console.log(">>> scheduleDate List(전체) : ", showSchedules);

      let schedules = new Array();
      showSchedules.forEach((scheduleItem) => {
        if (scheduleItem && Array.isArray(scheduleItem.scheduleDate)) {
          if (scheduleItem.scheduleDate.join('-') === targetDate) {
            schedules.push(scheduleItem.scheduleTime[0] + ":00");
          }
        }
      });
    }
  }

  return (
    <div className="detailPageBox">
      <DetailContainer className="detailContainer">
        <div className="detailBox detailBox1">
          <h3 className="detailTitle">STEP1</h3>
          <h3>날짜 선택</h3>
          <Calendar
            className={"calendarCustom"}
            onChange={handleChangedDate}
            minDate={moment.formatDay}
            value={choosedShowDate}
            formatDay={(locale, date) => moment(date).format("DD")}
          />
        </div>
        <div className="detailBox detailBox2">
          <div className="detailBox3">
            <h3 className="detailTitle">STEP2</h3>
            <h3>회차 선택</h3>
          </div>
          <div className="detailBox4">
            {
              showScheduleListRef.current && showScheduleList &&
              <div className="detailLabel">
                {showScheduleListRef.current.map((time, index) => (
                  <div key={showScheduleList[index].scheduleId}>
                    <label>
                      <div className="detailLabelContainer">
                        <FormCheckLeft
                          className="inputRadioCheck"
                          type="radio"
                          name="radioButton"
                          onClick={(e) => {
                            setChoosedShowTime(e.target.value);
                            showScheduleTimeIdRef.current = showScheduleList[index].scheduleId;
                          }}
                          //value={utils.dateFormatForButton(choosedShowTime) + ' ' + time + '시'}
                          value={utils.timeFormatForButton(time)}
                          checked={choosedShowTime === (utils.timeFormatForButton(time))}
                          onChange={(e) => {
                            setChoosedShowTime(e.target.value);
                            showScheduleTimeIdRef.current = showScheduleList[index].scheduleId;
                          }}
                        />

                        <FormCheckText>
                          {utils.timeFormatForButton(time)}
                        </FormCheckText>
                      </div>
                    </label>
                    <br />
                  </div>
                ))}
              </div>
            }
          </div>
        </div >
      </DetailContainer >
      <ButtonContainer>
        <button onClick={handleClickBookBtn}>예매하기</button>
      </ButtonContainer>
    </div >
  );
};

export default Detail1;
