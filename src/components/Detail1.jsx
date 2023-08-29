import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "../css/DetailMain.css";
import { useNavigate } from "react-router-dom";
import utils from '../utils.js'
import { setBookInfo, setBookStep, setBookDateTime } from '../store/slice'

const DetailContainer = styled.div`
  display: flex; 
  justify-content: center;
  
  border: 1.5px solid gray;
  border-radius: 5px;
  padding: 10px;
  min-width: 28rem;

  .detailBox{
    width:500px;
  }
  .detailBox2{
    padding: 0 0 0 3rem;
  }
  .detailTitle{
    color: red;
  }
  hr {
    width: 100%
    padding: 0;
    margin: 0 2rem 0 2rem ;
  }
  input{
    margin-bottom: 2rem;
  }
  input, label{
    cursor:pointer;
  }


  @media screen and (max-width: 800px) {
    width: 80%;
    flex-direction: column; 
    padding: 2rem;
    hr {
      width: 100%
      padding: 0;
      margin: 2rem 0 2rem 0;
    }
    .detailBox2{
      padding: 0;
    }
    .inputRadioCheck{
      padding: 0 ;
    }
    .detailBox2{
      width: 70vw;
    }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  button{
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
  display: flex;
  justify-content: center;
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
  const navigator = useNavigate();
  const bookDispatch = useDispatch();
  const state = useSelector((state) => state.booksData);

  const [selectedValue, setSelectedValue] = useState(new Date());
  const [choosedShowTime, setChoosedShowTime] = useState(null);

  /* 날짜 선택이 변경 될때 이벤트 */
  const handleChangedDate = (e) => {
    setSelectedValue(e);
    setChoosedShowTime(null);
  }

  /* 예매하기 버튼 선택 클릭 이벤트 */
  const handleClickBookBtn = () => {
    let selectedValueMs = selectedValue.getTime(); // 직렬화 하라느 오류때문에 getTime 함수 한 번 변환 거침
    // 회차 선택 여부 체크
    if (choosedShowTime === null) {
      alert('관람을 원하시는 공연 시간(회차)을 선택해주세요.');
      return;
    } else {
      console.log(choosedShowTime);

      // 현재 뮤지컬 정보를 예약정보 업데이트
      // console.log(props);
      bookDispatch(setBookInfo({ props, selectedValueMs, choosedShowTime }));
      bookDispatch(setBookStep({ bookStep: 2 }));
      navigator("/book/" + props.data.id + "/2");
    }
  }

  return (
    <div>
      <DetailContainer>
        <div className="detailBox detailBox1">
          <h3 className="detailTitle">STEP1</h3>
          <h3>날짜 선택</h3>
          <Calendar
            onChange={handleChangedDate}
            value={selectedValue}
            minDate={new Date()}
            formatDay={(locale, date) => moment(date).format("DD")}
          />
        </div>
        <hr />
        <div className="detailBox detailBox2">
          <h3 className="detailTitle">STEP2</h3>
          <h3>회차 선택</h3>
          <div className="detailLabel">
            {props.data.showTime.map((time, index) => (
              <div key={index}>
                <label>
                  <div className="detailLabelContainer">
                    <FormCheckLeft
                      className="inputRadioCheck"
                      type="radio"
                      name="radioButton"
                      onClick={(e) => {
                        let selectedValueMs = selectedValue.getTime();
                        bookDispatch(setBookDateTime({
                          selectedValueMs: selectedValueMs,
                          choosedShowTime: time + ":00",
                          bookShowTimeOrder: (index)
                        }))
                        setChoosedShowTime(e.target.value)
                      }}
                      value={utils.dateFormatForButton(selectedValue) + ' ' + time + '시'}
                      checked={choosedShowTime === (utils.dateFormatForButton(selectedValue) + ' ' + time + '시')}
                      onChange={(e) => {
                        setChoosedShowTime(e.target.value)
                      }}
                    />
                    <FormCheckText>
                      {utils.dateFormatForButton(selectedValue) + ' ' + time + '시'}
                    </FormCheckText>
                  </div>
                </label>
                <br />
              </div>
            ))}
          </div>
        </div>
      </DetailContainer>
      <ButtonContainer>
        <button
          onClick={handleClickBookBtn}>
          예매하기
        </button>
      </ButtonContainer>
    </div >
  );
};

export default Detail1;
