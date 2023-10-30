import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/UserInfo.css';
import UserInfoModify from './UserInfoModify';
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <form>
        <div id='openidwrap'>
          <div className='contentswrap'>
            <div className='memberClass'>
              <div className='myClass'>
                <p>홍길동님은 현재 <span>Welcome</span> 등급입니다. </p>
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
                <p>회원정보수정</p>
                <span>본인인증, 휴대폰번호 등<br />내정보를 수정하세요.</span>
              </div>
              <div className='menuBox' onClick={() => {
                navigate('/userinforesetpassword');
              }}>
                <p>비밀번호변경</p>
                <span>주기적인 변경으로<br />내정보를 보호하세요.</span>
              </div>
              <div className='menuBox'>
                <p>배송지관리</p>
                <span>기본주소 및 배송지를<br />관리하세요.</span>
              </div>
              <div className='menuBox'>
                <p>계정 연결 설정</p>
                <span>로그인 편의 기능을<br />활용하세요</span>
              </div>
              <div className='menuBox' onClick={() => {
                navigate('/loginlog');
              }}>
                <p>로그인관리</p>
                <span></span>
              </div>
              <div className='menuBox'>
                <p>회원탈퇴</p>
                <span></span>
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