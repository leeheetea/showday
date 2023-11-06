import React, { useEffect } from 'react'

const NaverRedirect = () => {

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    const state = new URL(window.location.href).searchParams.get("state");
    if (window.opener) {
      window.opener.postMessage({ type: "NAVER_AUTH", code: code, state: state }, "http://localhost:3000");
      window.close();
    }
  }, []);

  return (
    <div>
      네이버 로그인 처리중 ...
    </div>
  )
}

export default NaverRedirect