import React, { useState } from "react";
import KaKaoLogin from "../components/KakaoLogin";
import NaverLogin from "../components/NaverLogin";
import GoogleSnsLogin from "../components/GoogleSnsLogin";
import "../components/Login.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { login } from "./ApiService";
import kakaoImage from '../img/kakao_login_medium_narrow.png';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password })
    
    // const data = new FormData(e.target);
    // const username = data.get("username");
    // const password = data.get("password");

    // login({ username: username, password: password });
  };

  const findIdPopup = () => {
    const width = 573;
    const height = 681;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    window.open(
      "/findid",
      "_blank",
      `width=${width},height=${height},left=${left},top=${top}`
    );
  };

  const findPwdPopup = () => {
    const width = 573;
    const height = 681;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    window.open(
      "/findpwd",
      "_blank",
      `width=${width},height=${height},left=${left},top=${top}`
    );
  };

  return (
    <div>
      <Header></Header>
      <div className="StyledLoginWrap">
        <div className="StyledBody">
          <form onSubmit={handleSubmit}>
            <div className="StyledLoginBox">
              <div className="StyledLogo">
                <img
                  src="../img/Showday_logo.png"
                  alt="logo"
                  style={{
                    width: "119px",
                    height: "30px",
                    background: "cover",
                  }}
                />
              </div>
              <ul className="StyledUl">
                <li className="StyledLi">
                  <input
                    className="StyledInput"
                    type="text"
                    placeholder="아이디"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </li>
                <li className="StyledLi">
                  <input
                    className="StyledInput"
                    type="password"
                    placeholder="비밀번호"
                    autoComplete="off"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </li>
              </ul>
              <div>
                <input
                  className="StyledSubmitInputButton"
                  type="submit"
                  value="로그인"
                />
              </div>
              <p className="StyledP">
                <span>
                  <input type="checkbox" id="autoLogin" />
                  <label htmlFor="autoLogin">자동로그인</label>
                </span>
                <span>
                  <input type="checkbox" id="saveId" />
                  <label htmlFor="saveId">아이디 저장</label>
                </span>
              </p>
            </div>
          </form>

          <div className="SnsLoginWrap">
            <div className="SnsLoginNaver">
              <NaverLogin></NaverLogin>
            </div>
            <div className="SnsLoginKakao">
              <KaKaoLogin></KaKaoLogin>
              {/* <img src={kakaoImage} alt="kakaoImage" /> */}
            </div>
            <div className="SnsLoginGoogle">
              <GoogleSnsLogin></GoogleSnsLogin>
            </div>
          </div>

          <div className="StyledHelp">
            <span className="StyledHelpMenu" onClick={findIdPopup}>
              아이디 찾기 |{" "}
            </span>
            <span className="StyledHelpMenu" onClick={findPwdPopup}>
              비밀번호 찾기 |{" "}
            </span>
            <Link to="/accountcreate" className="StyledHelpMenu">
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
