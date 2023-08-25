import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import "../css/SearchPage.css"

const SearchPage = () => {
  return (
    <div>
      <Header/>
        <div className='searchPageContainer'>
            <ul>
              <li className='result_lst'>
                <div className='result_box'>
                  <a href='/search' alt="/">
                    <span className='img_box'>
                      <img className="searchImg" src="../img/slide3.webp" alt="img" />
                    </span>
                    <div className='box_text'>
                      <div className='title'>
                        <strong>공연 제목</strong>
                      </div>
                      <dl>
                        <dt>장소</dt>
                        <dd></dd>
                        <dt>기간</dt>
                        <dd></dd>
                        <dt>가격</dt>
                        <dd></dd>
                      </dl>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
         
        </div>
      <Footer/>
    </div>
  )
}

export default SearchPage