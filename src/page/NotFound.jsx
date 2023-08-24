import React from 'react'

const NotFound = () => {
  return (
    <div>
      <img
        src="../img/Showday_logo.png"
        alt="logo"
        style={{
          width: '90%'
        }} />
      <div style={{ marginLeft: '10%'}}>
        <h1>404 - Not Found</h1>
        <p>죄송합니다. 요청한 페이지를 찾을 수 없습니다.</p>
      </div>
    </div>
  )
}

export default NotFound