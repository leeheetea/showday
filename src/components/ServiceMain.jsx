/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import styled from "styled-components";
import "../css/ServiceMain.css";
import {
  FaUnlockAlt,
  FaRegNewspaper,
  FaCoins,
  FaTruck,
  FaTicketAlt,
  FaRegCreditCard,
  FaAngleRight,
} from "react-icons/fa";
import StyledLink from "./styled";
import { Outlet, useNavigate } from "react-router-dom";

const ServiceCenterMainContainer = styled.div`
  background: rgb(246, 246, 246);
  padding: 80px;
`;
const ServiceCenterContainer = styled.div`
  background: white;
  width: 1120px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid black;
  text-align: center;
  margin: 0 auto;

  .serviceCenterTitle {
    color: white;
    background: rgb(49, 49, 49);
    width: 15rem;
  }
  .serviceCenterTitle h2 {
    padding: 20px;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    padding: 0 10px;
  }
  ul a {
    width: 120px;
    border-left: 2px dotted gray;
    padding: 0 10px;
  }
  ul a:first-child {
    border: none;
  }

  .smallIcon {
    font-size: 40px;
  }

  @media screen and (max-width: 800px) {
  }
`;

const HelpContContainer = styled.div`
  background: white;
  width: 1120px;
  margin-top: 15px;
  display: grid;
  grid-template-columns: 240px 440px 440px;
`;
const ButtonContainer = styled.div`
  ul {
    padding: 0;
  }
  ul a {
    height: 65px;
    font-size: 1.3rem;
  }
  ul a li {
    border-bottom: 1px solid lightgray;
    padding: 20px 0;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: left;
  }
`;
const ServiceMain = () => {
  const navigator = useNavigate();
  return (
    <ServiceCenterMainContainer>
      <ServiceCenterContainer className="serviceCenterContainer">
        <div className="serviceCenterTitle">
          <h2>고객센터</h2>
        </div>
        <ul>
          <a href="/servicepage">
            <li>
              <FaUnlockAlt className="smallIcon" />
              <br />
              아이디/
              <br />
              패스워드 찾기
            </li>
          </a>
          <a href="/servicepage">
            <li>
              <FaRegNewspaper className="smallIcon" />
              <br />
              상담내역
              <br />
              확인하기
            </li>
          </a>
          <a href="/servicepage">
            <li>
              <FaCoins className="smallIcon" />
              <br />
              예매취소
              <br />
              환불 문의
            </li>
          </a>
          <a href="/servicepage">
            <li>
              <FaTruck className="smallIcon" />
              <br />
              티켓
              <br />
              배송문의
            </li>
          </a>
          <a href="/servicepage">
            <li>
              <FaTicketAlt className="smallIcon" />
              <br />
              할인수단
              <br />
              안내
            </li>
          </a>
          <a href="/servicepage">
            <li>
              <FaRegCreditCard className="smallIcon" />
              <br />
              할인카드
              <br />
              안내보기
            </li>
          </a>
        </ul>
      </ServiceCenterContainer>

      <HelpContContainer className="serviceCenterButton">
        <ButtonContainer className="help_cont service_cont">
          <ul>
            <StyledLink to="/servicepage/servicefirst">
              <li>
                고객센터 홈<FaAngleRight />
              </li>
            </StyledLink>
            <StyledLink to="/servicepage/announcement">
              <li>
                공지사항
                <FaAngleRight />
              </li>
            </StyledLink>
            <StyledLink to="/servicepage">
              <li>
                FAQ
                <FaAngleRight />
              </li>
            </StyledLink>
            <StyledLink to="/servicepage">
              <li>
                1:1상담
                <FaAngleRight />
              </li>
            </StyledLink>
            <StyledLink to="/servicepage">
              <li>
                1:1문의내역
                <FaAngleRight />
              </li>
            </StyledLink>
          </ul>
        </ButtonContainer>
        <Outlet />
      </HelpContContainer>
    </ServiceCenterMainContainer>
  );
};

export default ServiceMain;
