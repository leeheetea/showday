import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "../css/DetailMain.css";
import { useNavigate } from "react-router-dom";

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

  const [selectedValue, setSelectedValue] = useState(new Date());

  return (
    <div>
      <DetailContainer>
        <div className="detailBox detailBox1">
          <h3 className="detailTitle">STEP1</h3>
          <h3>날짜 선택</h3>
          <Calendar
            onChange={setSelectedValue}
            value={selectedValue}
            formatDay={(locale, date) => moment(date).format("DD")}
          />
        </div>
        <hr />
        <div className="detailBox detailBox2">
          <h3 className="detailTitle">STEP2</h3>
          <h3>회차 선택</h3>
          <div className="detailLabel">
            <label>
              <div className="detailLabelContainer">
                <FormCheckLeft
                  className="inputRadioCheck"
                  type="radio"
                  name="radioButton"
                  value="10월 3일 11시"
                />
                <FormCheckText>10월 3일 11시</FormCheckText>
              </div>
            </label>
            <br />
            <label>
              <div className="detailLabelContainer">
                <FormCheckLeft
                  className="inputRadioCheck"
                  type="radio"
                  name="radioButton"
                  value="10월 3일 18시"
                />
                <FormCheckText>10월 3일 18시</FormCheckText>
              </div>
            </label>
          </div>
        </div>
      </DetailContainer>
      <ButtonContainer>
        <button
          onClick={() => {
            navigator("/book/" + props.data.id + "/2");
          }}
        >
          예매하기
        </button>
      </ButtonContainer>
    </div>
  );
};

export default Detail1;
