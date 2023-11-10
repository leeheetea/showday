import React from 'react';
import "../css/MyMember.css";
import { useNavigate } from 'react-router-dom';
import  {  useState } from 'react';

const MyMember = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState('');

  // setUserData(prev => ({
  //     ...prev,
  //     isRadioChecked: e.target.value
  // }));
  
  const handleEditMemberBtn = ()=>{
    navigate('/userinfomodify');  
  }
  const handleEditPwdBtn = ()=>{
    navigate('/userinforesetpassword');
  }
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
                  {/* <td>{userData.username}</td> */}
                </tr>
                <tr>
                  <th>이름</th> 
                  {/* <td>{userData.name}</td> */}
                </tr>
                <tr>
                  <th>비밀번호</th>
                  <td><button onClick={handleEditPwdBtn}>비밀번호 변경</button></td>
                </tr>
                <tr>
                  <th>연락처</th>
                  {/* <td>{userData.phone}</td> */}
                </tr>
                <tr>
                  <th>이메일</th>
                  {/* <td>{userData.email}</td> */}
                </tr>
            </tbody>
          </table>
        </div>
          <button onClick={handleEditMemberBtn}>회원정보 수정</button>
      </div>
    </div>
  )
}

export default MyMember