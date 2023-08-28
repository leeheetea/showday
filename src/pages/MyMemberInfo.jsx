import React from 'react'
import "../css/MyMemberInfo.css"
import MyMember from '../components/MyMember'

const MyMemberInfo = () => {
  return (
    <div className='myMemberInfo-contianer'>
      <div>
        <h1>회원정보수정</h1>
      </div>
      <MyMember/>
    </div>
  )
}

export default MyMemberInfo