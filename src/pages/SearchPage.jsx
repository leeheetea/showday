import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import "../css/SearchPage.css"

const SearchPage = () => {
  return (
    <div>
      <Header/>
        <div className='searchPageContainer'>
         <a href='/search' alt="/">
            <img className="searchImg" src="../img/slide3.webp" alt="img" />
            <strong className='title'>공연 제목</strong>
            <dl>
              <dt>장소</dt>
              <dd>하늘</dd>
              <dt>기간</dt>
              <dd>2099.11~ 3000.11</dd>
              <dt>관람가:</dt>
              <dd>전석 10,000원</dd>
            </dl>
         </a>
        </div>
      <Footer/>
    </div>
  )
}

export default SearchPage