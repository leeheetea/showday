import React from "react";
import styled from "styled-components";
import "../css/ServiceMain.css";
import "../css/MyPage.css";


import {
  FaCoins,
  FaTicketAlt,
  FaAngleRight,
  FaCartPlus,
} from "react-icons/fa";

import {GoPerson}from "react-icons/go";
import StyledLink from "./styled";
import Header from "./Header";

const MyPagePoint = () => {
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
return (
  <ServiceCenterMainContainer >
    <Header></Header>
      <ServiceCenterContainer>
        <div className="serviceCenterTitle">
          <h2>마이페이지</h2>
        </div>

        <div className= 'myPageIconsContainer'>
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
                  <h5>수정<FaAngleRight /></h5>
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
                <br/>
                <ul>
                  <li>
                    <StyledLink to="/mypage">
                      예매확인/취소<FaAngleRight />
                    </StyledLink>
                  </li>
                </ul>
              </li>
              <li>
                <span>할인혜택</span>
                <br/>
                <ul>
                  <li>
                    <StyledLink to="/mypage/point">
                      SHOWDAY 포인트<FaAngleRight />
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/mypage">
                      예매권<FaAngleRight />
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/mypage">
                      상품권<FaAngleRight />
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/mypage">
                      쿠폰<FaAngleRight />
                    </StyledLink>
                  </li>
                </ul>
              </li>
              <li>
                  <span>고객센터</span>
                  <br/>
                  <ul>
                    <li>  
                      <StyledLink to="/servicepage">
                        고객센터 홈<FaAngleRight />
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink to="/servicepage">
                         공지사항<FaAngleRight />
                      </StyledLink>
                    </li>
                  </ul>
                </li>
          </ul>
        </ButtonContainer>

        <div className="myPageCheckContainer">
          <div className="myPageCheckTitle">
            <h2>SHOWDAY 포인트</h2>
          </div>
          <p><span className="textRedColor">SHOWDAY</span> 아이디로 차곡차곡 쌓아둔 포인트와 캐쉬 입니다.<br/>
                자세한 내역은 SHOWDAY 페이지를 통해 확인하실 수 있습니다.</p>
          
          <div className="sortbx">
            <div>
              <div className="ticketGuideTableBody">
                <h2>SHOWDAY 포인트</h2><p>내 사용가능 포인트</p><button>SHOWDAY포인트 내역 확인</button>
              </div>
            </div>
            <div>
                <div className="ticketGuideTableBody">
                  <h5>SHOWDAY 포인트/캐쉬 안내</h5>
                  <ol >
                    <li>포인트의 유효기간은 사용가능 포인트 전환일로부터 2년이며, 이벤트 적립금의 유효기간은 다르게 설정될 수 있습니다.</li>
                    <li>적립금 1포인트는 현금 1원과 동일하게 사용할 수 있습니다.</li>
                    <li>포인트는 티켓링크 뿐 아니라 SHOWDAY 가맹점 어디에서나 현금처럼 사용할 수 있습니다.</li>
                  </ol>
                </div>
              </div>
          </div>
        </div>
      </HelpContContainer>
  </ServiceCenterMainContainer>
  )
}

export default MyPagePoint