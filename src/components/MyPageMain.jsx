/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
import styled from "styled-components";
import "../css/ServiceMain.css";
import "../css/MyPage.css";

import { FaCoins, FaTicketAlt, FaAngleRight, FaCartPlus } from "react-icons/fa";

import { GoPerson } from "react-icons/go";
import StyledLink from "./styled";

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

  .serviceCenterTitle {
    color: white;
    background: rgb(49, 49, 49);
    width: 15rem;
  }
  .serviceCenterTitle h2 {
    padding: 20px;
  }
`;

const HelpContContainer = styled.div`
  background: white;
  width: 1120px;
  margin-top: 15px;
  display: grid;
  grid-template-columns: 240px 880px;
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
    padding: 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
  }
`;

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
                  <StyledLink to="/mypage">
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
            <li>
              <span>고객센터</span>
              <br />
              <ul>
                <li>
                  <StyledLink to="/servicepage">
                    고객센터 홈<FaAngleRight />
                  </StyledLink>
                </li>
                <li>
                  <StyledLink to="/servicepage">
                    공지사항
                    <FaAngleRight />
                  </StyledLink>
                </li>
              </ul>
            </li>
          </ul>
        </ButtonContainer>

        <div className="myPageCheckContainer">
          <div className="myPageCheckTitle">
            <h2>예매확인/취소</h2>
          </div>
          <p>
            <span className="textRedColor">예매번호</span>를 클릭하면 예매 상세
            내용을 확인할 수 있습니다.
            <br />
            공연/전시 예매 내역은 하단의 공연/전시 탭을 선택하면 확인할 수
            있습니다.
          </p>

          <div className="sortbx">
            <dl>
              <dt>기간별 조회</dt>
              <dd>
                <button>15일</button>
                <button>1개월</button>
                <button>2개월</button>
                <button>3개월</button>
              </dd>
              <dt>월 별 조회</dt>
              <dd>
                <input type="date" />
                <button>조회</button>
              </dd>
            </dl>
            <p>
              예매한 내역이 확인이 안되실 경우{" "}
              <a href="/" className="textRedColor">
                1:1 상담 문의
              </a>
              를 이용해주세요.
            </p>
            <table>
              <thead>
                <tr>
                  <th>예매번호</th>
                  <th>티켓명</th>
                  <th>관람일시</th>
                  <th>매수</th>
                  <th>취소가능일</th>
                  <th>상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1235468-516351</td>
                  <td>문라이트</td>
                  <td>2023-01-01</td>
                  <td>2</td>
                  <td>5일</td>
                  <td>구매확정</td>
                </tr>
              </tbody>
            </table>
            <div>
              <div className="ticketGuideTableBody">
                <h5>티켓취소 안내</h5>
                <ol>
                  <li>
                    예매한 티켓 전체 취소, 혹은 신용카드 결제 시 부분 취소가
                    가능합니다.
                    <br />
                    단, 일부 상품의 경우도 부분취소가 불가합니다.
                  </li>
                  <li>
                    티켓이 배송된 이후에는 인터넷이나 고객센터를 통한 취소가
                    불가하며, 받으신 티켓을 취소일 전까지 NHN LINK 본사로 반송을
                    해주셔야 취소 가능합니다. (등기우편을 이용해주세요!)
                  </li>
                  <li>
                    예매 당일 자정까지 취소하실 경우는 예매수수료도 환불되며,
                    취소수수료가 부과되지 않습니다. 그 이후에 취소하실 경우는
                    예매수수료가 환불되지 않으며, 취소수수료는 정책에 따라
                    부과됩니다.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </HelpContContainer>
    </ServiceCenterMainContainer>
  );
};

export default MyPageMain;
