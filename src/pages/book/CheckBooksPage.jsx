import React, { useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./CheckBooksPage.css";
import { setConfirms } from "../../store/slice";
import BookTitle from "../../components/book/BookTitle";
import LineContainer from "../../components/LineContainer";
import LineButton from "../../components/LineButton";

const CheckBooksPage = () => {
  const bookDispatch = useDispatch();
  const state = useSelector((state) => state.userInfo);
  const [values, setValues] = useState({
    name: "",
    phoneNumber: "",
  });

  // 필수 동의사항 체크
  const [requiredConfirm, setRequiredConfirm] = useState({
    confirm1: false,
    confirm2: false
  })
  const handleConfirmChange = (confirm) => {
    const updatedConfirmsChecked = {
      ...requiredConfirm,
      [confirm]: !requiredConfirm[confirm]
    };
    setRequiredConfirm(updatedConfirmsChecked);

    const isAllRequiredConfirmsChecked = ['confirm1', 'confirm2'].every((confirm) =>
      Object.values(updatedConfirmsChecked).every(
        (checked) => checked));

    // if (isAllRequiredConfirmsChecked) { // 모두 동의된 경우 메모리에 저장
    //   bookDispatch(setConfirms({ step4: true }));
    // } else {
    //   bookDispatch(setConfirms({ step4: false }));
    // }
    bookDispatch(setConfirms({ step4: true }));
  }

  const [email, setEmail] = useState('');
  // 이메일 유효성 검사
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailPattern.test(e.target.value);
    setShowErrorEmail(!isValidEmail);
  }, [])

  // const onChangeEmail = useCallback((e) => {
  //   setEmail(e.target.value);

  //   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //   const isValidEmail = emailPattern.test(e.target.value);
  //   setShowErrorEmail(!isValidEmail);
  // }, [])

  useEffect(() => {
    setValues(state);
  }, []);

  const handleChange = (e) => {

    if (e.target.name === 'email') {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const isValidEmail = emailPattern.test(e.target.value);
      setShowErrorEmail(!isValidEmail);
    }

    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

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



  return (
    <div className="checkBooksContainer">
      <BookTitle width="100%" $isLeft={true}>
        티켓할인, 매수 선택
      </BookTitle>
      <LineContainer className="getTicketContainer" tmargin="10px">
        <p>티켓</p>
        <LineButton>현장수령</LineButton>
        <span>&nbsp;&nbsp;현재는 현장 수령만 가능합니다.</span>
      </LineContainer>
      <BookTitle width='100%' tpadding='40px' isleft='true'>주문자 정보</BookTitle>
      <form action="">
        <LineContainer tmargin='15px'>
          <div className='checkBookFormName'>
            <p className='required'>이름</p>
            <p>홍길동</p>
            <p className='required'>휴대폰번호</p>
            <input
              value={values.phoneNumber}
              name='phoneNumber'
              inputMode="numeric"
              maxLength={11}
              placeholder="휴대폰번호 (-없이 입력)"
              onChange={handleChange}></input>
          </div>
        </LineContainer>
        <LineContainer tmargin='-2px'>
          <div className='checkBookFormName'>
            <p>이메일</p>
            {/*  <input
              value={values.email}
              name='email'
              placeholder='이메일'
              onChange={handleChange}></input> */}
            <div className='emailContainer'>
              <div className="emailInput">
                <input
                  value={email}
                  name='email'
                  id="email"
                  onChange={onChangeEmail}
                  ref={emailInputRef}
                />
                <span
                  id="inputTelClear"
                  className="delBtn"
                ></span>
              </div>
              <div className="emailSelect">
                <select name="memEmail2" id="memEmail2" onChange={onChangeEmailSelect}>
                  <option value="@etc">직접입력</option>
                  <option value="@naver.com">@naver.com</option>
                  <option value="@hanmail.net">@hanmail.net</option>
                  <option value="@gmail.com">@gmail.com</option>
                  <option value="@nate.com">@nate.com</option>
                  <option value="@hotmail.com">@hotmail.com</option>
                </select>
                <div className="newSelect">{/* todo */}</div>
                <ul className="options">
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
          <div className="errorText" style={{ display: showErrorEmail ? 'block' : 'none' }}>
            이메일 주소 양식에 맞게 작성해주세요.
          </div>
        </LineContainer>
      </form>
      <BookTitle width='100%' tpadding='40px' isleft='true'>예매자 확인</BookTitle>
      <LineContainer tmargin='15px'>
        <label htmlFor="confirm1">
          <input type='checkbox'
            id='confirm1'
            name='confirm1'
            checked={requiredConfirm.confirm1}
          //onChange={() => handleConfirmChange('confirm1')}
          />
          <span className='guideText'>&nbsp;주문자 확인 및 예매처리를 위해 휴대폰번호, 이메일을 수집하며 이용목적 달성 이후 파기합니다.</span>
        </label>
      </LineContainer>
      <LineContainer tmrgin='-2px'>
        <label htmlFor="confirm2">
          <input type='checkbox'
            id='confirm2'
            name='confirm2'
            checked={requiredConfirm.confirm2}
            onChange={() => handleConfirmChange('confirm2')}
          />
          <span className='guideText'>&nbsp;개인정보 제3자 제공에 동의합니다. (고객응대 및 관람정보안내 등을 위함)</span>
        </label>
      </LineContainer>
    </div>
  )
}

export default CheckBooksPage;