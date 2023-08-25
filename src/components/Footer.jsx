import React from 'react'
import "../css/Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className='footer_menu'>
        <ul>
          <li>회사정보</li>
          <li>개인정보 처리방침</li>
          <li>청소년 보호정책</li>
          <li>이용약관</li>
          <li>고객센터</li>
          <li>티켓판매 안내</li>
        </ul>
      </div>
      <div className='footer_inner'>
        <span className='title'>
          쇼데이 주식회사
        </span>
        <address className='footer_address'>
          <p>주소: 0000001 서울특별시 관악구 봉천로 001, 쇼빌딩 대표이사: 김유진 사업자등록번호: 000-00-00000</p>
          <p>1000-0000 sunnyday@showday.co.kr 통신판매업 신고번호: 제 2023-서울-0001호 사업자정보확인 개인정보보호 책임자: 홍길동</p>
        </address>
      </div>
      <span className='footer_etc'>
       Copyright © SHOW DAY Corporation. All rights reserved.
      </span>
    </footer>
  )
}

export default Footer