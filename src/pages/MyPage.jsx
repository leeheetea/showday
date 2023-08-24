import React from 'react'
import Header from "../components/Header";
import MyPageMain from '../components/MyPageMain';
import "../css/MyPage.css"

const MyPage = () => {
  return (
    <div>
      <Header/>
        <MyPageMain></MyPageMain>
    </div>
  )
}

export default MyPage