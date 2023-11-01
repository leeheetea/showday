import React, { useCallback, useState } from 'react'
import '../components/FindPwd.css'
import { useNavigate } from 'react-router-dom'
import { emailAuth, findPassword, updatePassword } from './ApiService';

const FindPwd = () => {
  const navigate = useNavigate();

  const [isInputPhoneOpen, setInputPhoneOpen] = useState(false); // 아코디언 열림/닫힘 상태
  const [isInputEmailOpen, setInputEmailOpen] = useState(false); // 아코디언 열림/닫힘 상태
  const [isInputVerifyOpen, setInputVerifyOpen] = useState(false); // 아코디언 열림/닫힘 상태

  // 아코디언 열기/닫기 함수
  const toggleInputPhone = () => {
    setInputPhoneOpen(!isInputPhoneOpen);
    setInputEmailOpen(false);
    setInputVerifyOpen(false);
  };
  const toggleInputEmail = () => {
    setInputEmailOpen(!isInputEmailOpen);
    setInputPhoneOpen(false);
    setInputVerifyOpen(false);
  };
  const toggleInputVerify = () => {
    setInputVerifyOpen(!isInputVerifyOpen);
    setInputEmailOpen(false);
    setInputPhoneOpen(false);
  };

  //------------------------------------------------------------------------------
  const [username, setUserName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showFindPwd, setShowFindPwd] = useState(false);

  const onChangeUserName = useCallback((e) => {
    setUserName(e.target.value);
  }, []);

  const onChangeName = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const toggleFindPwd = () => {
    setShowFindPwd(!showFindPwd);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    findPassword({ username: username, name: name, email: email })
      .then((response) => {
        if (response === "Password found") {
          toggleFindPwd();
          emailAuth({ email: email })
            .then((res) => {
              const confirmCode = res.confirmCode;
              setConfirmCode(confirmCode);
            })
        } else {
          alert("입력을 다시 확인해주세요.");
        }
      })
  }

  //-----------------------------------------------------------------------------------

  const [clientCode, setClientCode] = useState('');
  const [confirmCode, setConfirmCode] = useState('');
  const [showResetPassword, setShowResetPassword] = useState(false);

  const handleConfirmCode = () => {
    // console.log("handleConfirmCode is called");
    if (clientCode === confirmCode) {
      setShowResetPassword(!showResetPassword);
    }
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

  const handleResetPassword = () => {
    updatePassword({ username: username, password: password })
      .then((response) => {
        if (response === "password updated") {
          alert("비밀번호가 수정되었습니다.");
          window.close();
        } else {
          alert("비밀번호 수정을 실패했습니다. 다시 시도해주세요.");
        }
      })
  }



  return (
    <div className='findPwdBody'>
      <form className='findAccountForm' onSubmit={handleSubmit}>
        <div className="searchWrap">
          <div className="popHeaderWrap">
            <h1 className='popTitle'>
              <span>비밀번호 찾기</span>
            </h1>
            <span className='btnClose'>
              <a>닫기</a>
            </span>
          </div>
          <div className="contentsWrap">
            <div className="searchTab">
              <ul>
                <li onClick={() => {
                  navigate('/findid');
                }}>
                  아이디 찾기
                </li>
                <li className='current' onClick={() => {
                  navigate('/findpwd');
                }}>
                  비밀번호 찾기
                </li>
              </ul>
            </div>

            {!showResetPassword && (
              <div className="idSearchWrap">
                <div className="notiArea">
                  <span>비밀번호를 찾을 방법을 선택해주세요.</span>
                </div>
                <div className="searchType">
                  <ul>
                    {/* 휴대폰번호로 찾기 */}
                    <li className='typeList'>
                      <div className='title'>
                        <button type="button" onClick={toggleInputPhone}>등록된 휴대폰번호로 찾기</button>
                      </div>
                      {isInputPhoneOpen && (<div className='inputEnter'>
                        <div className='inputBox'>
                          <div className="styleInput">
                            <input type="text" id='memNm1' className='iInput' placeholder='이름' />
                            <span id='memNm1Clear' className='delBtn'></span>
                          </div>
                          <div className="telInput">
                            <input type="text" id='inputTel' className='iInput' inputMode='numeric' placeholder='휴대폰번호 (-없이 입력)' />
                            <span id='inputTelClear' className='delBtn'></span>
                            <p className='error'>이름을 입력해주세요.</p>
                            <p className='error'>잘못된 휴대폰번호 형식입니다. (-없이 입력)</p>
                          </div>
                        </div>
                        <div className='btnArea'>
                          <button type='submit' className='btnRed'>확인</button>
                        </div>
                      </div>)}
                    </li>
                    {/* 이메일로 찾기 */}
                    <li className='typeList'>
                      <div className='title'>
                        <button type="button" onClick={toggleInputEmail}>등록된 이메일로 찾기</button>
                      </div>
                      {isInputEmailOpen && (<div className='inputEnter'>
                        <div className='inputBox'>
                          <div className="styleInput">
                            <input
                              type="text"
                              id='userNm2'
                              className='iInput'
                              value={username}
                              onChange={onChangeUserName}
                              placeholder='아이디' />
                            <span id='memNm1Clear' className='delBtn'></span>
                          </div>
                          <div className="styleInput">
                            <input
                              type="text"
                              id='memNm2'
                              className='iInput'
                              value={name}
                              onChange={onChangeName}
                              placeholder='이름' />
                            <span id='memNm1Clear' className='delBtn'></span>
                          </div>
                          <div className='emailContainer'>
                            <div className="emailInput">
                              <input
                                type="text"
                                id='inputEmail'
                                className='iInput'
                                value={email}
                                onChange={onChangeEmail}
                                placeholder='이메일' />
                              <span id='inputTelClear' className='delBtn'></span>
                            </div>
                            <div className="emailSelect">
                              <select name="memEmail2" id="memEmail2">
                                <option value="etc">직접입력</option>
                                <option value="naver.com">naver.com</option>
                                <option value="hanmail.net">hanmail.net</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="nate.com">nate.com</option>
                                <option value="hotmail.com">hotmail.com</option>
                              </select>
                              <div className='newSelect'>
                                {/* todo */}
                              </div>
                              <ul className='options'>
                                <li className="option">직접입력</li>
                                <li className="option">naver.com</li>
                                <li className="option">hanmail.net</li>
                                <li className="option">gmail.com</li>
                                <li className="option">nate.com</li>
                                <li className="option">hotmail.com</li>
                              </ul>
                            </div>
                          </div>

                        </div>

                        {!showFindPwd && (<div className='btnArea'>
                          <button type='submit' className='btnRed'>확인</button>
                        </div>)}
                      </div>
                      )}
                      {showFindPwd && (
                        <div className="inputBox">
                          <div className="styleInput">
                            <input
                              type="text"
                              value={clientCode}
                              className='iInput'
                              onChange={(e) => setClientCode(e.target.value)}
                              placeholder="인증코드를 입력하세요"
                            />
                            <button type='button' className='btnRed' onClick={handleConfirmCode}>비밀번호 찾기</button>
                          </div>
                        </div>
                      )}
                    </li>
                    {/* 본인인증으로 찾기 */}
                    <li>
                      <div className="title">
                        <button type="button" onClick={toggleInputVerify}>본인인증으로 찾기</button>
                      </div>
                      {isInputVerifyOpen && (<div className="inputEnter">
                        <div className="inputBox">
                          <div className="btnBox_phone">
                            <h4>휴대폰 인증</h4>
                            <p>본인명의 휴대폰으로 가입한 아이디 찾기</p>
                          </div>
                          <div className="btnBox_ipin">
                            <h4>아이핀 인증</h4>
                            <p>아이핀 인증으로 가입한 아이디 찾기</p>
                          </div>
                        </div>
                      </div>)}
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {showResetPassword && (
              <>
                {/* 아이디 */}
                <div className='uBlock'>
                  <div className="inputArea_id">
                    <label htmlFor="id">아이디</label>
                    <input
                      type="text"
                      name='id'
                      id='id'
                      value={username}
                      readOnly
                    />
                  </div>
                </div>
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
                <button type='button' className='btnRed' onClick={handleResetPassword}>비밀번호 재설정</button>
              </>
            )}

          </div>
        </div>
      </form>

    </div>
  )
}

export default FindPwd