import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img
        src="../img/Showday_logo.png"
        alt="logo"
        style={{
          width: '90%'
        }} />
      <div style={{ marginLeft: '10%' }}>
        <h1>404 - Not Found</h1>
        <p>죄송합니다. 요청한 페이지를 찾을 수 없습니다.</p>
        <h3 style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => {
          navigate('/');
        }}>메인 페이지로 가기</h3>
      </div>
    </div>
  )
}

export default NotFound