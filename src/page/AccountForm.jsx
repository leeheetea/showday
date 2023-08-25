import React, { useCallback, useEffect, useRef, useState } from 'react'
import '../components/AccountForm.css'

const AccountForm = () => {
  /////////////////////////////////////////////////////////////////////////////////////
  const [id, setId] = useState('');
  const [showErrorId, setShowErrorId] = useState(false);

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
    const isLengthOutOfRange = e.target.value.length < 6 || e.target.value.length > 20;
    const hasNonEnglishCharacters = /[^\x00-\x7F]+/.test(e.target.value);

    setShowErrorId(hasNonEnglishCharacters || isLengthOutOfRange);
  }, []);
  //////////////////////////////////////////////////////////////////////////////////////
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
  ////////////////////////////////////////////////////////////////////////////////
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
  //////////////////////////////////////////////////////////////////////
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
  },[])

  ////////////////////////////////////////////////////////////////////////////////////
  const [phone, setPhone] = useState('');

  const onChangePhone = useCallback((e) => {
    setPhone(e.target.value.replace(/[^0-9]/g, ''));
  }, [])
  /////////////////////////////////////////////////////////
  const [isCheckedUnder14, setIsCheckedUnder14] = useState(false);
  const onChangeUnder14 = useCallback((e) => {
    setIsCheckedUnder14(e.target.checked);
  }, []);
  /////////////////////////////////////////////////////////
  const [under14Email, setUnder14Email] = useState('');
  const [showErrorUnder14Email, setShowErrorUnder14Email] = useState(false);

  const onChangeUnder14Email = useCallback((e) => {
    setUnder14Email(e.target.value);

    const under14EmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidUnder14Email = under14EmailPattern.test(e.target.value);
    setShowErrorUnder14Email(!isValidUnder14Email);
  }, []);
  
  const under14EmailInputRef = useRef(null);

  const onChangeUnder14EmailSelect = useCallback((e) => {
    const selectedDomain14 = e.target.value;
    setUnder14Email((prevUnder14Email) => {
      const under14EmailWithoutDomain = prevUnder14Email.split('@')[0];
      return `${under14EmailWithoutDomain}${selectedDomain14}`;
    });

    if (under14EmailInputRef.current) {
      under14EmailInputRef.current.focus();
    }
  },[])



  ///////////////////////////////////////////////////////////////////



  return (
    <div className='AccountForm'>
      <div className='AccountFormWrapper'>
        {/* 아이디 */}
        <div className='uBlock'>
          <div className="inputArea_id">
            <label htmlFor="id">아이디</label>
            <input
              type="text"
              placeholder='6~20자 영문, 숫자'
              name='id'
              id='id'
              onChange={onChangeId}
            />
          </div>
          <div className="errorText" style={{ display: showErrorId ? 'block' : 'none' }}>
            영문으로 시작하는 6~20자 영문(소문자), 숫자만 사용 가능합니다.
          </div>
        </div>

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
              />
            </div>
            <div>
              <button onClick={togglePasswordVisibility}>보기</button>
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
                onChange={onChangePasswordVerify}
              />
            </div>
            <div>
              <button onClick={togglePasswordVerifyVisibility}>보기</button>
            </div>
          </div>
          <div className="errorText" style={{ display: showErrorPasswordVerify ? 'block' : 'none' }}>
            비밀번호가 일치하지 않습니다. 다시 입력해주세요.
          </div>
        </div>

        {/* 이름 */}
        <div className='uBlock'>
          <div className="inputArea_name">
            <label htmlFor="name">이름</label>
            <input type="text" id='name' name='name' />
          </div>
          <div className='errorText'>
            한글과 영문 대,소문자를 사용해주세요.
          </div>
        </div>

        {/* 이메일 */}
        <div className='uBlock'>
          <div className="inputArea_email">
            <label htmlFor="email">이메일</label>
            <input
              type="text"
              placeholder='someone@example.com'
              name='email'
              id='email'
              value={email}
              onChange={onChangeEmail}
              ref={emailInputRef}
            />
            <div>
              <label htmlFor="">
                <select name="" id="" onChange={onChangeEmailSelect}>
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
          <div className='accountValidBlock'>
            <p className='blockText'>동일 정보로 가입된 계정으로 로그인 하시겠습니까?</p>
            <a href="#" className='accountValidBlockLogin'>로그인하기</a>
          </div>
        </div>

        {/* 휴대폰 */}
        <div className='uBlock'>
          <div className='inputArea_phone'>
            <label htmlFor="phone">휴대폰</label>
            <input
              type="tel"
              placeholder='010 1234 5678'
              maxLength='11'
              name='phone'
              id='phone'
              value={phone}
              onChange={onChangePhone}
            />
            <button>인증번호받기</button>
          </div>
          <div className='errorText'>
            점유인증을 하여 휴대폰 번호를 등록해주세요. 등록한 번호는 로그인 이후 변경 가능합니다.
          </div>
          <div className='accountValidBlock'>
            <p className="blockText">동일 정보로 가입된 계정으로 로그인 하시겠습니까?</p>
            <a href="#" className='accountValidBlockLogin'>로그인하기</a>
          </div>
        </div>
        <div className="uBlock">
          <div className='uBlock_certification'>
            <div className='inputArea'>
              <div>
                <label htmlFor="">인증번호</label>
                <input type="text" />
                <button>삭제</button>
              </div>
              <div>
                <button>재발송</button>
                <button>확인</button>
              </div>
            </div>
            <div className='certifyTime'>
              인증유효시간<span className='time'>00:00</span>
            </div>
          </div>
        </div>

        {/* 선택 체크박스 */}
        <div className='uBlock_checkBlock'>
          <div className='checkBox'>
            <label htmlFor="">
              <input type="checkbox" />
              <span>SMS, 이메일로 상품 및 이벤트 정보를 받겠습니다.(선택)</span>
            </label>
          </div>
          <div className='checkBox'>
            <label htmlFor="">
              <input
                type="checkbox"
                checked={isCheckedUnder14}
                onChange={onChangeUnder14}
              />
              <span>14세 미만입니다.</span>
            </label>
          </div>
          <div className='errorText' style={{ display: isCheckedUnder14 ? 'block' : 'none' }}>
            14세 미만 가입시 법정대리인 동의 필수입니다.
          </div>
        </div>
        <div className='uBlock'>
          <p className='p_under14'>만 14세 미만 회원은 법정대리인(부모님) 동의를 받은 경우만 회원가입 가능합니다.</p>
        </div>

        {/* 만 14세 미만 법정대리인 이름 */}
        <div className='uBlock_under14' style={{ display: isCheckedUnder14 ? 'block' : 'none' }}>
          <div className="inputArea_name">
            <label htmlFor="">이름</label>
            <input type="text" />
          </div>
          <div className='errorText'>
            한글과 영문 대,소문자를 사용해주세요.
          </div>
        </div>

        {/* 만 14세 미만 법정대리인 이메일 */}
        <div className='uBlock_under14' style={{ display: isCheckedUnder14 ? 'block' : 'none' }}>
          <div className="inputArea_email">
            <label htmlFor="under14Email">이메일</label>
            <input
              type="email"
              placeholder='someone@example.com'
              name='under14Email'
              id='under14Email'
              value={under14Email}
              onChange={onChangeUnder14Email}
              ref={under14EmailInputRef}
            />
            <div>
              <label htmlFor="">
                <select name="" id="" onChange={onChangeUnder14EmailSelect}>
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
          <div className="errorText" style={{ display: showErrorUnder14Email ? 'block' : 'none' }}>
            이메일 주소 양식에 맞게 작성해주세요.
          </div>
          <div className='accountValidBlock'>
            <p className='blockText'>동일 정보로 가입된 계정으로 로그인 하시겠습니까?</p>
            <a href="#" className='accountValidBlockLogin'>로그인하기</a>
          </div>
        </div>

        {/* 만 14세 미만 법정대리인 가입동의받기 */}
        <div className='uBlock_agreeBlock' style={{ display: isCheckedUnder14 ? 'block' : 'none' }}>
          <div className="inputArea">
            <div className='agreeBlock'>
              <span>가입동의받기</span>
              <button>법정대리인 본인 인증</button>
            </div>
          </div>
        </div>

        {/* 개인정보 유효기간 */}
        <div className='uBlock_validation'>
          <div className='uBlock_validation_bold'>개인정보 유효기간</div>
          <div className='radioBoxWrapper'>
            <div className='radioBox'>
              <label htmlFor="">
                <input type="radio" name='radio' />
                <span>탈퇴 시까지</span>
              </label>
            </div>
            <div className='radioBox'>
              <label htmlFor="">
                <input type="radio" name='radio' />
                <span>1년</span>
              </label>
            </div>
          </div>
          <div className='noticeText'>개인정보 유효기간 경과 이후 파기 또는 분리저장, 관리합니다.</div>
        </div>

        {/* 가입완료 버튼 */}
        <div className='submitBtn'>
          <button disabled>가입완료</button>
        </div>

      </div>
    </div>
  )
}

export default AccountForm