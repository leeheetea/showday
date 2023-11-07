import React, { useCallback, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { matchPassword, resetPassword } from './ApiService';
import { useNavigate } from 'react-router-dom';
import '../css/UserInfoResetPassword.css'

const UserInfoResetPassword = () => {

  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const onChangeOldPassword = useCallback((e) => {
    setOldPassword(e.target.value);
  }, [])

  const token = localStorage.getItem('ACCESS_TOKEN');
  let payloadData = {};
  if (token) {
    const payloadBase64 = token.split('.')[1];
    payloadData = JSON.parse(atob(payloadBase64));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(password);
    matchPassword({ password: oldPassword })
      .then((res) => {
        setMessage(res);
        setShowPassword(prev => !prev);
      })
  }

  const handleSubmitReset = (e) => {
    e.preventDefault();
    resetPassword({ password: password })
      .then((res) => {
        console.log(res);
        if (res === "password updated") {
          localStorage.removeItem("ACCESS_TOKEN");
          alert("비밀번호를 업데이트 했습니다. 다시 로그인해주세요.");
          navigate('/login');
        } else {
          alert("비밀번호를 업데이트에 실패했습니다.")
        }
      })
  }

  // 비밀번호 유효성 검사
  const [password, setPassword] = useState('');
  const [showErrorPassword, setShowErrorPassword] = useState(false);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
    const lengthCondition = e.target.value.length >= 8 && e.target.value.length <= 12;
    const uppercaseCondition = /[A-Z]+/.test(e.target.value);
    const lowercaseCondition = /[a-z]+/.test(e.target.value);
    const numberCondition = /[0-9]+/.test(e.target.value);
    const specialCharacterCondition = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+/.test(e.target.value);

    const conditionsMet = lengthCondition && (
      (uppercaseCondition + lowercaseCondition + numberCondition + specialCharacterCondition) >= 2
    );

    setShowErrorPassword(!conditionsMet);
  }, [])

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  }
  // 비밀번호 확인 유효성 검사
  const [passwordVerify, setPasswordVerify] = useState('');
  const [showErrorPasswordVerify, setShowErrorPasswordVerify] = useState(false);

  const onChangePasswordVerify = useCallback((e) => {
    setPasswordVerify(e.target.value);
    const isSamePassword = e.target.value === password ? true : false;

    setShowErrorPasswordVerify(!isSamePassword);
  }, [password]);

  const [passwordVerifyVisible, setPasswordVerifyVisible] = useState(false);
  const togglePasswordVerifyVisibility = () => {
    setPasswordVerifyVisible(!passwordVerifyVisible);
  }

  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const areAllFieldsEmpty = useCallback(() => {
    return !password && !passwordVerify;
  }, [password, passwordVerify]);

  const areAllFieldsFilled = useCallback(() => {
    return password && passwordVerify;
  }, [password, passwordVerify]);

  const isAllFieldsValid = useCallback(() => {
    return !showErrorPassword && !showErrorPasswordVerify;
  }, [showErrorPassword, showErrorPasswordVerify]);

  useEffect(() => {
    setIsSubmitEnabled(
      !areAllFieldsEmpty() && areAllFieldsFilled() && isAllFieldsValid()
    );

  }, [areAllFieldsEmpty, isAllFieldsValid, areAllFieldsFilled]);


  return (
    <div>
      <Header />
      <div className="resetPassword-container">
        <form onSubmit={handleSubmit}>

          {showPassword &&(<div>
            <div className='uBlock'>
              <div className="inputArea_id">
                <label htmlFor="id">아이디</label>
                <input
                  type="text"
                  name='id'
                  id='id'
                  value={payloadData.username}
                />
              </div>
            </div>
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
                    name='oldPassword'
                    id='oldPassword'
                    value={oldPassword}
                    onChange={onChangeOldPassword}
                  />
                </div>
              </div>
            </div>
            <div className='submitBtn'>
              <button type='submit' disabled={!oldPassword}>비밀번호 확인</button>
            </div>
          </div>)}

          {/* </div> */}
        </form>
        {message && (
          <form className="response" onSubmit={handleSubmitReset}>
            {/* 비밀번호 */}
            <div className='uBlock'>
              <div className="inputArea_password">
                <div className='inputAreaLabel'>
                  <label htmlFor="password">비밀번호</label>
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder='8~12자 영문, 숫자, 특수문자'
                    name='password'
                    id='password'
                    value={password}
                    onChange={onChangePassword}
                    required
                  />
                </div>
                <div>
                  <button type='button' onClick={togglePasswordVisibility}>보기</button>
                </div>
              </div>
              <div className="errorText" style={{ display: showErrorPassword ? 'block' : 'none' }}>
                8~12자의 영문, 숫자, 특수문자 중 2가지 이상으로만 가능합니다.
              </div>
            </div>

            {/* 비밀번호 확인 */}
            <div className='uBlock'>
              <div className="inputArea_password_verify">
                <div className='inputAreaLabel'>
                  <label htmlFor="passwordVerify">비밀번호 확인</label>
                  <input
                    type={passwordVerifyVisible ? 'text' : 'password'}
                    placeholder='8~12자 영문, 숫자, 특수문자'
                    name='passwordVerify'
                    id='passwordVerify'
                    value={passwordVerify}
                    onChange={onChangePasswordVerify}
                    required
                  />
                </div>
                <div>
                  <button type='button' onClick={togglePasswordVerifyVisibility}>보기</button>
                </div>
              </div>
              <div className="errorText" style={{ display: showErrorPasswordVerify ? 'block' : 'none' }}>
                비밀번호가 일치하지 않습니다. 다시 입력해주세요.
              </div>
            </div>

            <div className='submitBtn'>
              <button type='submit' disabled={!isSubmitEnabled}>비밀번호 재설정</button>
            </div>
          </form>
        )}
      </div >
      <Footer />
    </div >
  )
}

export default UserInfoResetPassword