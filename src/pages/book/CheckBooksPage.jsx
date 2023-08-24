import React, { useState } from 'react'

import './CheckBooksPage.css'
import BookTitle from '../../components/book/BookTitle'
import LineContainer from '../../components/LineContainer'

const CheckBooksPage = () => {
  const [values, setValues] = useState({
    name: '',
    phoneNumber: '',
    email: ''
  })

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className='checkBooksContainer'>
      <BookTitle width='100%' isLeft>티켓할인, 매수 선택</BookTitle>
      <LineContainer className='getTicketContainer' tMargin='10px'>
        <p>티켓</p>
        <button>현장수령</button>
      </LineContainer>
      <BookTitle width='100%' tPadding='40px' isLeft>주문자 정보</BookTitle>
        <form action="">
          <LineContainer tMargin='15px'>
            <div className='checkBookFormName'>
              <p className='required'>이름</p>
              <p>홍길동</p>
              <p className='required'>휴대폰번호</p>
              <input 
                value={values.phoneNumber} 
                placeholder='전화번호'
                onChange={handleChange}></input>
            </div>
          </LineContainer>
          <LineContainer  tMargin='-2px'>
            <div className='checkBookFormName'>
              <p>이메일</p>
              <input 
              value={values.email} 
              placeholder='이메일'
              onChange={handleChange}></input>
            </div>
          </LineContainer>
        </form>
        <BookTitle width='100%'  tPadding='40px' isLeft>예매자 확인</BookTitle>
        <LineContainer tMargin='15px'>
          <input type='radio' name='checkInfo' value='checkInfo1' />
          <span className='guideText'>주문자 확인 및 예매처리를 위해 휴대폰번호, 이메일, &#40;배송수령 시&#41;, 주소, &#40;입력필요 시&#41; 생년월일을 수집하며, 이용목적 달성 이후 파기합니다.</span>
        </LineContainer>
        <LineContainer tMargin='-2px'>
          <input  type='radio' name='checkInfo' value='checkInfo2'/>
          <span className='guideText'>개인정보 제3자 제공에 동의합니다. (고객응대 및 관람정보안내 등을 위함)</span>
        </LineContainer>
      </div>
  )
}

export default CheckBooksPage