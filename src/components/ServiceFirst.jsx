import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
  const noticItems = useSelector((state) => state.posts);
  const faqItems = useSelector((state) => state.faq);

  return (
    <>
      <div className="helpContIconContainer">
        <div>
          <div>
            <strong>
              예매 도움 받기<FaSearch></FaSearch>
              <FaAngleRight />
            </strong>
            <hr />
            <span>예매 안내를 통해서 편리한 예매방법을 알아보세요.</span>
          </div>
        </div>
        <div>
          <div>
            <strong>
              <span color="red">1:1 상담</span> 받기
              <FaRocketchat></FaRocketchat>
              <FaAngleRight />
            </strong>
            <hr />
            <span>빠르고 간편한 온라인 1:1문의를 이용해보세요.</span>
          </div>
        </div>
        <div>
          <div>
            <strong>
              FAQ 보기<FaQuestionCircle></FaQuestionCircle>
              <FaAngleRight />
            </strong>
            <hr />
            <span>궁금한 질문들을 쉽고 편하게 한번에 알아보세요.</span>
          </div>
        </div>
        <div>
          <div>
            <strong>
              티켓 소실 알아보기<FaQuora></FaQuora>
              <FaAngleRight />
            </strong>
            <hr />
            <span>새로운 소식들을 빠르게 접해보세요.</span>
          </div>
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
            {faqItems.map((post) => {
              return (
                <li>
                  <Link to={"/servicepage/faq/read/" + post.id}>
                    <span>{post.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <ul>
            <strong>최근 공지 사항</strong>
            <hr />
            {noticItems.map((post) => {
              return (
                <li>
                  <Link to={"/servicepage/announcement/read/" + post.id}>
                    <span>{post.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ServiceFirst;
