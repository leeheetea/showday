import React, { useState } from "react";
import "../css/Header.css";
import { RiSearchLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate(`/search?query=${encodeURIComponent(searchValue)}`);
            }}
          >
            <input
              className="searchbar"
              type="text"
              placeholder="검색어 입력"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <div className="search-icon">
              <RiSearchLine />
            </div>
          </form>
        </div>
        <div className="search-container-menu">
          <span
            className="search-container-menu-text"
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </span>
          <span
            className="search-container-menu-text"
            onClick={() => {
              navigate("/accountcreate");
            }}
          >
            회원가입
          </span>
          <span className="search-container-menu-text">
            <Link to="/mypage/point">마이페이지</Link>
          </span>
          <span className="search-container-menu-text">
            <Link to="/servicepage">고객센터</Link>
          </span>
        </div>
      </div>
    </header>
  );
};

const Header = () => {
  return <SearchBar />;
};

export default Header;
