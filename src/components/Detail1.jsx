import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "../css/DetailMain.css";
import { useNavigate } from "react-router-dom";
import { setBookInfo, setBookStep } from "../store/slice";

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

const Detail1 = (props) => {
  const navigator = useNavigate();
  const bookDispatch = useDispatch();

  const [selectedValue, setSelectedValue] = useState(new Date());
  const [choosedShowTime, setChoosedShowTime] = useState(null);

  /* 날짜 선택이 변경 될때 이벤트 */
  const handleChangedDate = (e) => {
    setSelectedValue(e);
    setChoosedShowTime(null);
  };

  /* 예매하기 버튼 선택 클릭 이벤트 */
  const handleClickBookBtn = () => {
    // 회차 선택 여부 체크
    if (choosedShowTime === null) {
      alert("관람을 원하시는 공연 시간(회차)을 선택해주세요.");
      return;
    } else {
      console.log(choosedShowTime);

      // 현재 뮤지컬 정보를 예약정보 업데이트
      bookDispatch(setBookInfo({ selectedValue, choosedShowTime }));
      bookDispatch(setBookStep({ bookStep: 2 }));
      navigator("/book/" + props.data.id + "/2");
    }
  };

  return (
    <div className="detailPageBox">
      <DetailContainer className="detailContainer">
        <div className="detailBox detailBox1">
          <h3 className="detailTitle">STEP1</h3>
          <h3>날짜 선택</h3>
          <Calendar
            className={"calendarCustom"}
            onChange={handleChangedDate}
            minDate={new Date()}
            value={selectedValue}
            formatDay={(locale, date) => moment(date).format("DD")}
          />
        </div>
        <div className="detailBox detailBox2">
          <h3 className="detailTitle">STEP2</h3>
          <h3>회차 선택</h3>
          <div className="detailLabel">{}</div>
        </div>
      </DetailContainer>
      <ButtonContainer>
        <button onClick={handleClickBookBtn}>예매하기</button>
      </ButtonContainer>
    </div>
  );
};

export default Detail1;
