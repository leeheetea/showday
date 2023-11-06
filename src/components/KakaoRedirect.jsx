import React, { useEffect } from 'react'

const KakaoRedirect = () => {

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    if (window.opener) {
      window.opener.postMessage({ type: "KAKAO_AUTH", code: code }, "http://localhost:3000");
      window.close();
    }
  }, []);

  return (
    <div>
      카카오 로그인 처리중 ...
    </div>
  )
}

export default KakaoRedirect