import React from "react";

import {
  FaRocketchat,
  FaSearch,
  FaAngleRight,
  FaTeamspeak,
  FaQuestionCircle,
  FaMicroblog,
  FaQuora,
} from "react-icons/fa";

const ServiceFirst = () => {
  return (
    <>
      <div className="helpContIconContainer">
        <div>
          <a href="/servicepage">
            <strong>
              예매 도움 받기<FaSearch></FaSearch>
              <FaAngleRight />
            </strong>
            <hr />
            <span>예매 안내를 통해서 편리한 예매방법을 알아보세요.</span>
          </a>
        </div>
        <div>
          <a href="/servicepage">
            <strong>
              <span color="red">1:1 상담</span> 받기
              <FaRocketchat></FaRocketchat>
              <FaAngleRight />
            </strong>
            <hr />
            <span>빠르고 간편한 온라인 1:1문의를 이용해보세요.</span>
          </a>
        </div>
        <div>
          <a href="/servicepage">
            <strong>
              FAQ 보기<FaQuestionCircle></FaQuestionCircle>
              <FaAngleRight />
            </strong>
            <hr />
            <span>궁금한 질문들을 쉽고 편하게 한번에 알아보세요.</span>
          </a>
        </div>
        <div>
          <a href="/servicepage">
            <strong>
              티켓 소실 알아보기<FaQuora></FaQuora>
              <FaAngleRight />
            </strong>
            <hr />
            <span>티켓링크의 새로운 소식들을 빠르게 접해보세요.</span>
          </a>
        </div>
        <div>
          <strong>
            예매상담하기<FaMicroblog></FaMicroblog>
          </strong>
          <hr />
          <strong>1111-1111</strong> <span>10:00~19:00 (월~일)</span>
        </div>
        <div>
          <strong>
            문의하기<FaTeamspeak></FaTeamspeak>
          </strong>
          <hr />
          <strong>2222-2222</strong> <span>10:00~19:00 (월~일)</span>
        </div>
      </div>
      <div className="helpmain_list">
        <div>
          <ul>
            <strong>자주 묻는 질문</strong>
            <hr />
            <li>
              <span>비밀번호 변경을 하고 싶어요.</span>
            </li>
            <li>
              <span>내 정보를 변경하고 싶어요.</span>
            </li>
            <li>
              <span>뮤지컬 예매를 빨리 하려면?</span>
            </li>
            <li>
              <span>할인수단을 알고 싶어요.</span>
            </li>
            <li>
              <span>티켓링크에서 할인이 되는 신용카드는?</span>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <strong>최근 공지 사항</strong>
            <hr />
            <li>
              <span>{"[단독판매]제 33기 TBC 가요아카데미 (선착순 ..."}</span>
            </li>
            <li>
              <span>{"[단독판매] 극단 코끼리들이웃는다 ‘물질’ - ..."}</span>
            </li>
            <li>
              <span>{"[단독판매] 공감각적 클래식 콘서트 < Playlist ..."}</span>
            </li>
            <li>
              <span>{"[단독판매]제 33기 TBC 가요아카데미 (선착순 ..."}</span>
            </li>
            <li>
              <span>{"[티켓오픈] PUBG NATIONS CUP 2023 티켓오픈 ..."}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ServiceFirst;
