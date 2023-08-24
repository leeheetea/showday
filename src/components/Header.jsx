import React from "react";
import "../css/Header.css";
import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-icon-container">
          <div className="header-ticket-icon">
            <Link to="/">
              <img
                className="header-logo"
                src={
                  "https://github.com/leeheetea/showday/blob/main/public/img/Showday_logo.png?raw=true"
                }
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="searchbar-container">
          <input className="searchbar" type="text" placeholder="검색어 입력" />
          <div className="search-icon">
            <RiSearchLine />
          </div>
        </div>
        <div className="search-container-menu">
          <span className="search-container-menu-text">로그인</span>
          <span className="search-container-menu-text">회원가입</span>
          <span className="search-container-menu-text"><Link to="/mypage">마이페이지</Link></span>
          <span className="search-container-menu-text"><Link to="/servicepage">고객센터</Link></span>
        </div>
      </div>
    </header>
  );
};

const Header = () => {
  return <SearchBar />;
};

export default Header;
