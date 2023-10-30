import React, { useCallback, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { resetPassword } from './ApiService';

const UserInfoResetPassword = () => {

  const [password, setPassword] = useState('');

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(password);
    resetPassword({ password: password });
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
      </div >
      <Footer />
    </div >
  )
}

export default UserInfoResetPassword