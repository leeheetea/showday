import React from "react";
import "../css/Header.css";
import { RiSearchLine } from "react-icons/ri";
import logo from "../img/logo.png";

const SearchBar = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-icon-container">
          <div className="header-ticket-icon">
            <img className="header-logo" src={logo} alt="" />
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
          <span className="search-container-menu-text">마이페이지</span>
          <span className="search-container-menu-text">예약확인/취소</span>
        </div>
      </div>
    </header>
  );
};

const Header = () => {
  return <SearchBar />;
};

export default Header;
