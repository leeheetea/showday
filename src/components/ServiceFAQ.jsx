import React from 'react'
import { Link } from 'react-router-dom' 
import "../css/ServiceFAQ.css"
// 고객센터 FAQ
const ServiceFAQ = () => {
  return (
    <div className="faq-contianer">
      <ul className='faqMenucontianer'>
          <Link to="/servicepage/faq">
            <li>
              <h4>전체</h4>              
            </li>
          </Link>
          <Link to="/servicepage/faq">
            <li>
              <h4>예매/취소</h4>              
            </li>
          </Link>
          <Link to="/servicepage/faq">
            <li>
              <h4>결제</h4>              
            </li>
          </Link>
          <Link to="/servicepage/faq">
            <li>
              <h4>회원</h4>              
            </li>
          </Link>
          <Link to="/servicepage/faq">
            <li>
              <h4>
                기타
              </h4>              
            </li>
          </Link>
        </ul>
    </div>
  )
}

export default ServiceFAQ