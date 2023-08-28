/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
import "../css/MyPage.css";
import { FaCoins, FaTicketAlt, FaAngleRight, FaCartPlus } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import StyledLink from "./styled";
import {
  ServiceCenterMainContainer,
  ServiceCenterContainer,
  HelpContContainer,
  ButtonContainer,
} from "../components/styled.js";
import { Outlet } from "react-router-dom";

const MyPageMain = () => {
  return (
    <ServiceCenterMainContainer className="myPageMainContainer">
      <ServiceCenterContainer>
        <div className="serviceCenterTitle">
          <h2>마이페이지</h2>
        </div>
        <div className="myPageIconsContainer">
          <ul>
            <StyledLink to="/mypage/point">
              <li>
                <FaCoins className="icon" />
                <div>
                  <h5>SHOWDAY 포인트</h5>
                  <h5>1,000,000,000</h5>
                </div>
              </li>
            </StyledLink>
            <StyledLink to="/mypage">
              <li>
                <FaCartPlus className="icon" />
                <div>
                  <h5>나의 예매권</h5>
                  <h5>5</h5>
                </div>
              </li>
            </StyledLink>
            <StyledLink to="/mypage">
              <li>
                <FaTicketAlt className="icon" />
                <div>
                  <h5>나의 쿠폰</h5>
                  <h5>10</h5>
                </div>
              </li>
            </StyledLink>
            <StyledLink to="/mypage">
              <li>
                <GoPerson className="icon" />
                <div>
                  <h5>나의 회원정보</h5>
                  <h5>
                    수정
                    <FaAngleRight />
                  </h5>
                </div>
              </li>
            </StyledLink>
          </ul>
        </div>
      </ServiceCenterContainer>
      <HelpContContainer className="serviceCenterButton">
        <ButtonContainer className="help_cont">
          <ul>
            <li>
              <span>예매관리</span>
              <br />
              <ul>
                <li>
                  <StyledLink to="/mypage/ticketingcancle">
                    예매확인/취소
                    <FaAngleRight />
                  </StyledLink>
                </li>
              </ul>
            </li>
            <li>
              <span>할인혜택</span>
              <br />
              <ul>
                <li>
                  <StyledLink to="/mypage/point">
                    SHOWDAY 포인트
                    <FaAngleRight />
                  </StyledLink>
                </li>
                <li>
                  <StyledLink to="/mypage">
                    예매권
                    <FaAngleRight />
                  </StyledLink>
                </li>
                <li>
                  <StyledLink to="/mypage">
                    상품권
                    <FaAngleRight />
                  </StyledLink>
                </li>
                <li>
                  <StyledLink to="/mypage">
                    쿠폰
                    <FaAngleRight />
                  </StyledLink>
                </li>
              </ul>
            </li>
          </ul>
        </ButtonContainer>
        <Outlet />
      </HelpContContainer>
    </ServiceCenterMainContainer>
  );
};

export default MyPageMain;
