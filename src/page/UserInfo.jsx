import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/UserInfo.css';
import UserInfoModify from './UserInfoModify';
import { useNavigate } from 'react-router-dom';
import { getName } from './ApiService';

const UserInfo = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('ACCESS_TOKEN');
  let payloadData = {};
  if (token) {
    const payloadBase64 = token.split('.')[1];
    payloadData = JSON.parse(atob(payloadBase64));
  }

  const [name, setName] = useState();

  useEffect(() => {
    getName().then(response => {
      setName(response);
    }).catch(error => {
      console.error('An error occurred:', error);
    });
  }, [])

  return (
    <div>
      <Header />
      <form>
        <div id='openidwrap'>
          <div className='contentswrap'>
            <div className='memberClass'>
              <div className='myClass'>
                <span className="material-symbols-outlined">
                  favorite
                </span>

                <p>{name}님은 현재 <span style={{ color: '#ef3e42', fontWeight: 'bold' }}>WELCOME</span> 등급입니다. </p>
              </div>
              <div className='benefit'>
                <p><a href="">등급별 혜택보기</a></p>
              </div>
            </div>
            <div className='mainMenuClass'>
              <div className='menuBox' onClick={() => {
                navigate('/userinfomodify');
              }
              }>
                <span className="material-symbols-outlined">
                  manage_accounts
                </span>
                <div>
                  <p>회원정보수정</p>
                  <span>본인인증, 휴대폰번호 등<br />내정보를 수정하세요.</span>
                </div>
              </div>
              <div className='menuBox' onClick={() => {
                navigate('/userinforesetpassword');
              }}>
                <span className="material-symbols-outlined">
                  lock_open
                </span>
                <div>
                  <p>비밀번호변경</p>
                  <span>주기적인 변경으로 <br /> 내정보를 보호하세요.</span>
                </div>
              </div>
              <div className='menuBox'>
                  <span className="material-symbols-outlined">
                    package_2
                  </span>
                  <div>
                    <p>배송지관리</p>
                    <span>기본주소 및 배송지를<br />관리하세요.</span>
                  </div>
              </div>
              <div className='menuBox'>
                  <span className="material-symbols-outlined">
                    share
                  </span>
                  <div>
                    <p>계정 연결 설정</p>
                    <span>로그인 편의 기능을<br />활용하세요</span>
                  </div>
              </div>
              <div className='menuBox' onClick={() => {
                navigate('/loginlog');
              }}>
                  <span className="material-symbols-outlined">
                    key
                  </span>
                  <p>로그인관리</p>
              </div>
              <div className='menuBox'>
              
                  <span className="material-symbols-outlined">
                    logout
                  </span>
                  <p>회원탈퇴</p>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>

  )
}

export default UserInfo