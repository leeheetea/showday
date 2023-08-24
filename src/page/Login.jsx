import React, { useState } from 'react'
import KaKaoLogin from '../components/KakaoLogin'
import NaverLogin from '../components/NaverLogin'
// import GoogleLogin from '../components/GoogleLogin'
import { GoogleLogin } from '@react-oauth/google'
import '../components/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    console.log(data);
  }

  const findIdPopup = () => {
    const width = 380;
    const height = 600;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    window.open('/findid', '_blank', `width=${width},height=${height},left=${left},top=${top}`);
  };

  const findPwdPopup = () => {
    const width = 380;
    const height = 600;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    window.open('/findpwd', '_blank', `width=${width},height=${height},left=${left},top=${top}`);
  };

  return (
    <div className='StyledLoginWrap'>
      <div className='StyledBody' >
        <form onSubmit={handleSubmit}>
          <div className='StyledLoginBox' >
            <div className='StyledLogo'>
              <img src="https://placehold.it/119x30" alt="logo" />
            </div>
            <ul className='StyledUl' >
              <li className='StyledLi'>
                <input className='StyledInput'
                  type="text"
                  placeholder='아이디'
                  value={username}
                  onChange={handleUsernameChange} />
              </li>
              <li className='StyledLi'>
                <input className='StyledInput'
                  type="password"
                  placeholder='비밀번호'
                  autoComplete='off'
                  value={password}
                  onChange={handlePasswordChange} />
              </li>
            </ul>
            <div>
              <input className='StyledInputButton'
                type="submit"
                value='로그인' />
            </div>
            <p className='StyledP'>
              <span>
                <input type="checkbox" id='autoLogin' />
                <label htmlFor="autoLogin">자동로그인</label>
              </span>
              <span>
                <input type="checkbox" id='saveId' />
                <label htmlFor="saveId">아이디 저장</label>
              </span>
            </p>
          </div>
        </form>

        <div className='SnsLoginWrap'>
          <div className='SnsLoginNaver'>
            <NaverLogin></NaverLogin></div>
          <div className='SnsLoginKakao'>
            <KaKaoLogin></KaKaoLogin></div>
          <GoogleLogin></GoogleLogin>
        </div>

        <div className='StyledHelp'>
          <a className='StyledHelpMenu' onClick={findIdPopup}>아이디 찾기 | </a>
          <a className='StyledHelpMenu' onClick={findPwdPopup}>비밀번호 찾기 | </a>
          <Link to='/accountcreate' className='StyledHelpMenu'>회원가입</Link>
        </div>
      </div>
    </div>
  )
}

export default Login