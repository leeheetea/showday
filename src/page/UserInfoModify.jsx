import React, { useCallback, useRef, useState } from 'react'
import '../css/UserInfoModify.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { emailAuth, getUserInfo, resetEmail } from './ApiService'
import EmailConfirm from './EmailConfirm';
import { useNavigate } from 'react-router-dom'

const UserInfoModify = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState('');

  const [showResetEmail, setShowResetEmail] = useState(false);
  const toggleShowEmailform = () => {
    setShowResetEmail(!showResetEmail);
  }

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, [])

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(password);
    getUserInfo({ password: password })
      .then(data => {
        setUserData(data);
      })
  }

  // 이메일 유효성 검사
  const [email, setEmail] = useState('');
  const [showErrorEmail, setShowErrorEmail] = useState(false);


  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailPattern.test(e.target.value);
    setShowErrorEmail(!isValidEmail);
  }, [])

  const emailInputRef = useRef(null);

  const onChangeEmailSelect = useCallback((e) => {
    const selectedDomain = e.target.value;
    setEmail((prevEmail) => {
      const emailWithoutDomain = prevEmail.split('@')[0];
      return `${emailWithoutDomain}${selectedDomain}`;
    });

    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, [])

  // 이메일 인증
  const [isEmailVerifiedOpen, setisEmailVerifiedOpen] = useState(false);
  const [serverCode, setServerCode] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const isEmailVerifiedClose = () => {
    setisEmailVerifiedOpen(false);
  }

  const handleEmailConfirm = (isConfirmed) => {
    if (isConfirmed) {
      resetEmail({ email: email })
        .then((response) => {
          if (response === 'email updated') {
            alert("이메일이 변경되었습니다.");
            setisEmailVerifiedOpen(false);
            setIsEmailVerified(true);
            navigate('/userinfomodify');
          } else {
            alert(response);
          }
        })

    } else {
      alert("인증 번호가 일치하지 않습니다.");
    }
  }

  const handleEmailAuth = (emailDTO) => {
    emailAuth(emailDTO)
      .then((response) => {
        setServerCode(response.confirmCode);
        setisEmailVerifiedOpen(true);
      })
      .catch((error) => {
        console.log(error);
        alert("인증 중 오류가 발생했습니다. 다시 시도해주세요.");
      })
  }

  //////////////////////////////////////////////////////////////////////////
  const handleRadioChange = (e) => {
    setUserData(prev => ({
      ...prev,
      isRadioChecked: e.target.value
    }));
  };


  return (
    <div>
      <Header />
      <div class="grid-container">
        <form onSubmit={handleSubmit}>
          <div className='uBlock'>
            <div className="inputArea_password">
              <div className='inputAreaLabel'>
                <label htmlFor="password">비밀번호</label>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder='비밀번호를 입력해주세요'
                  name='password'
                  id='password'
                  value={password}
                  onChange={onChangePassword}
                />
              </div>
              <div>
                <button type='button' onClick={togglePasswordVisibility}>보기</button>
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
            <h2>회원정보수정</h2>
            <hr />
            <h3>기본정보</h3>
            <hr />
            {/* <p>아이디 : {userData.username}</p> */}
            <div className='uBlock'>
              <div className="inputArea_id">
                <label htmlFor="id">아이디</label>
                <input
                  type="text"
                  placeholder='6~20자 영문, 숫자'
                  name='id'
                  id='id'
                  value={userData.username}
                  readOnly
                />
              </div>
            </div>
            {/* <p>이름 : {userData.name}</p> */}
            {/* 이름 */}
            <div className='uBlock'>
              <div className="inputArea_name">
                <label htmlFor="name">이름</label>
                <input
                  type="text"
                  id='name'
                  name='name'
                  value={userData.name}
                />
              </div>
            </div>
            {/* <p>휴대폰번호 : {userData.phone}</p> */}
            <div className='uBlock'>
              <div className='inputArea_phone'>
                <label htmlFor="phone">휴대폰</label>
                <input
                  type="tel"
                  placeholder='010 1234 5678'
                  maxLength='11'
                  name='phone'
                  id='phone'
                  value={userData.phone}
                />
              </div>
            </div>

            {/* <p>이메일 : {userData.email} <span><button onClick={toggleShowEmailform}>수정</button></span></p> */}
            <div className='uBlock'>
              <div className="inputArea_email">
                <label htmlFor="email">이메일</label>
                <input
                  type="text"
                  name='email'
                  id='email'
                  value={userData.email}
                  onChange={onChangeEmail}
                  ref={emailInputRef}
                  readOnly={isEmailVerified}
                />
                <div>
                  <button
                    type='button'
                    disabled={isEmailVerified}
                    onClick={toggleShowEmailform}
                    >수정</button>
                </div>
                <div>
                  <label htmlFor="">
                    <select name="" id="emailSelectOption" onChange={onChangeEmailSelect} disabled={isEmailVerified}>
                      <option value="">직접입력</option>
                      <option value="@naver.com">@naver.com</option>
                      <option value="@hanmail.net">@hanmail.net</option>
                      <option value="@gmail.com">@gmail.com</option>
                      <option value="@nate.com">@nate.com</option>
                      <option value="@hotmail.com">@hotmail.com</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="errorText" style={{ display: showErrorEmail ? 'block' : 'none' }}>
                이메일 주소 양식에 맞게 작성해주세요.
              </div>
              <EmailConfirm
                isOpen={isEmailVerifiedOpen}
                onClose={isEmailVerifiedClose}
                onConfirm={handleEmailConfirm}
                serverCode={serverCode}
              />
            </div>

            {/* 이메일 */}
            {showResetEmail && (
              <div className='uBlock'>
                <div className="inputArea_email">
                  <label htmlFor="email">새 이메일</label>
                  <input
                    type="text"
                    placeholder='someone@example.com'
                    name='email'
                    id='email'
                    value={email}
                    onChange={onChangeEmail}
                    ref={emailInputRef}
                    readOnly={isEmailVerified}
                  />
                  <div>
                    <button
                      type='button'
                      disabled={isEmailVerified}
                      onClick={() => handleEmailAuth({ email })}>인증</button>
                  </div>
                  <div>
                    <label htmlFor="">
                      <select name="" id="emailSelectOption" onChange={onChangeEmailSelect} disabled={isEmailVerified}>
                        <option value="">직접입력</option>
                        <option value="@naver.com">@naver.com</option>
                        <option value="@hanmail.net">@hanmail.net</option>
                        <option value="@gmail.com">@gmail.com</option>
                        <option value="@nate.com">@nate.com</option>
                        <option value="@hotmail.com">@hotmail.com</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div className="errorText" style={{ display: showErrorEmail ? 'block' : 'none' }}>
                  이메일 주소 양식에 맞게 작성해주세요.
                </div>
                <EmailConfirm
                  isOpen={isEmailVerifiedOpen}
                  onClose={isEmailVerifiedClose}
                  onConfirm={handleEmailConfirm}
                  serverCode={serverCode}
                />
              </div>)}
            {/* <p>sms수신여부 : {userData.smscheck ? '예' : '아니오'}</p> */}
            <div className='uBlock_checkBlock'>
              <div className='checkBox'>
                <label htmlFor="">
                  <input type="checkbox" name='smsCheckBox' checked={userData.smscheck} />
                  <span>SMS, 이메일로 상품 및 이벤트 정보를 받겠습니다.(선택)</span>
                </label>
              </div>
            </div>
            {/* <p>개인정보 유효기간 : {userData.isRadioChecked}</p> */}
            <div className='uBlock_validation'>
              <div className='uBlock_validation_bold'>개인정보 유효기간</div>
              <div className='radioBoxWrapper'>
                <div className='radioBox'>
                  <label htmlFor="radio1">
                    <input
                      type="radio"
                      name='radio'
                      id='radio1'
                      value={"탈퇴 시까지"}
                      onChange={handleRadioChange}
                      checked={userData.isRadioChecked === '탈퇴 시까지'}
                      disabled={userData.isRadioChecked !== ''}
                    />
                    <span>탈퇴 시까지</span>
                  </label>
                </div>
                <div className='radioBox'>
                  <label htmlFor="radio2">
                    <input
                      type="radio"
                      name='radio'
                      id='radio2'
                      value={'1년'}
                      onChange={handleRadioChange}
                      checked={userData.isRadioChecked === '1년'}
                      disabled={userData.isRadioChecked !== ''}
                    />
                    <span>1년</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div >
      <Footer />
    </div >
  )
}

export default UserInfoModify