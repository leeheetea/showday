import React, { useEffect } from 'react'

const KakaoRedirectLogout = () => {

    useEffect(() => {
        if (window.location.href === "http://localhost:3000/user/oauth/kakao/logout") {
            window.opener.postMessage("logoutCompleted", "http://localhost:3000");
            window.close();
        }
    }, []);


    return (
        <div>카카오 로그아웃 처리중 ...</div>
    )
}

export default KakaoRedirectLogout