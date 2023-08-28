import React from 'react'
import "../css/MyMember.css"

const MyMember = () => {
  return (
    <div className='myMemberContainer'>
      <div>
        <div >
          <div className="sortbx">
            <div>
              <div className="myMemberBoxBody">
                <h3>회원님은 
                  <span className='red'>'일반회원'</span>
                  이십니다.
                </h3>
              </div>
            </div> 
          </div> 
        </div>
        <div>
          <table className='myMemberTable'>
            <tbody className='myMemberTbody'>
                <tr>
                  <th>아이디</th>
                  <td>showday****@naver.com</td>
                </tr>
                <tr>
                  <th>비밀번호</th>
                  <td><button>비밀번호 변경</button></td>
                </tr>
                <tr>
                  <th>연락처</th>
                  <td>010-****-**11</td>
                </tr>
                <tr>
                  <th>주소</th> 
                  <td>서울시 **구 **동 **-** ***호</td>
                </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default MyMember