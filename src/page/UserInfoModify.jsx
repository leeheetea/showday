import React, { useCallback, useState } from 'react'
import '../css/UserInfoModify.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getUserInfo } from './ApiService'

const UserInfoModify = () => {

  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState('');

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(password);
    getUserInfo({ password: password })
      .then(data => {
        setUserData(data);
      })
  }

  return (
    <div>
      <Header />
      <div class="grid-container">
        <form onSubmit={handleSubmit}>
          {/* <div>
            <label htmlFor="password">비밀번호 </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder='비밀번호를 입력해주세요.'
            /> */}
          <div className='uBlock'>
            <div className="inputArea_password">
              <div className='inputAreaLabel'>
                <label htmlFor="password">비밀번호</label>
                <input
                  type='password'
                  placeholder='비밀번호를 입력해주세요'
                  name='password'
                  id='password'
                  value={password}
                  onChange={onChangePassword}
                />
              </div>
            </div>
          </div>
          <div className='submitBtn'>
            <button type='submit' disabled={!password}>비밀번호 확인</button>
          </div>

          {/* </div> */}
        </form>
        {userData && ( 
          <div className="response">
            <h2>User Data:</h2>
            <p>아이디 : {userData.username}</p>
            <p>이름 : {userData.name}</p>
            <p>이메일 : {userData.email}</p>
            <p>휴대폰번호 : {userData.phone}</p>
            <p>sms수신여부 : {userData.smscheck ? '예' : '아니오'}</p>
            <p>개인정보 유효기간 : {userData.isRadioChecked}</p>
          </div>
        )}
      </div >
      <Footer />
    </div >
  )
}

export default UserInfoModify