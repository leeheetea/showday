import React, { useEffect } from 'react'

const NaverRedirectLogout = () => {

    useEffect(() => {
        if (window.location.href === "https://www.naver.com/") {
            window.opener.postMessage("logoutCompleted", "http://localhost:3000");
            window.close();
        }
    }, []);


    return (
        <div>네이버 로그아웃 처리중 ...</div>
    )
}

export default NaverRedirectLogout