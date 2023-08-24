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
  FaRocketchat,
  FaSearch,
  FaAngleRight,
  FaTeamspeak,
  FaQuestionCircle,
  FaMicroblog,
  FaQuora,
} from "react-icons/fa";
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
            <StyledLink to="/servicepage">
              <li>
                고객센터 홈<FaAngleRight />
              </li>
            </StyledLink>
            <StyledLink to="/servicepage">
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

        <div className="helpContIconContainer">
          <div>
            <a href="/servicepage">
              <strong>예매 도움 받기<FaSearch></FaSearch><FaAngleRight /></strong>
              <hr/>
              <span>예매 안내를 통해서 편리한 예매방법을 알아보세요.</span>
            </a>
          </div>
          <div>
            <a href="/servicepage">
              <strong>
                <span color="red">1:1 상담</span> 받기<FaRocketchat ></FaRocketchat><FaAngleRight />
              </strong>
              <hr/>
              <span>빠르고 간편한 온라인 1:1문의를 이용해보세요.</span>
            </a>
          </div>
          <div>
            <a href="/servicepage">
              <strong>FAQ 보기<FaQuestionCircle></FaQuestionCircle><FaAngleRight /></strong>
              <hr/>
              <span>궁금한 질문들을 쉽고 편하게 한번에 알아보세요.</span>
            </a>
          </div>
          <div>
            <a href="/servicepage">
              <strong>티켓 소실 알아보기<FaQuora ></FaQuora><FaAngleRight /></strong>
              <hr/>
              <span>티켓링크의 새로운 소식들을 빠르게 접해보세요.</span>
            </a>
          </div>
          <div>
            <strong>예매상담하기<FaMicroblog></FaMicroblog></strong>
            <hr/>
            <strong>1111-1111</strong>{' '}
            <span>10:00~19:00 (월~일)</span>
          </div>
          <div>
            <strong>문의하기<FaTeamspeak></FaTeamspeak></strong>
            <hr/>
            <strong>2222-2222</strong>{' '}
            <span>10:00~19:00 (월~일)</span>
          </div>
        </div>

        <div className="helpmain_list">
          <div>
            <ul>
              <strong>자주 묻는 질문</strong>
              <hr/>
              <li>
                <a href="#">비밀번호 변경을 하고 싶어요.</a>
              </li>
              <li>
                <a href="#">내 정보를 변경하고 싶어요.</a>
              </li>
              <li>
                <a href="#">뮤지컬 예매를 빨리 하려면?</a>
              </li>
              <li>
                <a href="#">할인수단을 알고 싶어요.</a>
              </li>
              <li>
                <a href="#">티켓링크에서 할인이 되는 신용카드는?</a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <strong>최근 공지 사항</strong>
              <hr/>
              <li>
                <a href="#">
                  {"[단독판매]제 33기 TBC 가요아카데미 (선착순 ..."}
                </a>
              </li>
              <li>
                <a href="#">
                  {"[단독판매] 극단 코끼리들이웃는다 ‘물질’ - ..."}
                </a>
              </li>
              <li>
                <a href="#">
                  {"[단독판매] 공감각적 클래식 콘서트 < Playlist ..."}
                </a>
              </li>
              <li>
                <a href="#">
                  {"[단독판매]제 33기 TBC 가요아카데미 (선착순 ..."}
                </a>
              </li>
              <li>
                <a href="#">
                  {"[티켓오픈] PUBG NATIONS CUP 2023 티켓오픈 ..."}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </HelpContContainer>
    </ServiceCenterMainContainer>
  );
};

export default ServiceMain;
