import React, { useEffect, useState } from 'react'
import Header from './Header';
import Footer from './Footer';

function getBrowser(userAgent) {
    if (!userAgent) {
        return "Unknown";
    }

    if (userAgent.includes("Edge")) {
        return "Microsoft Edge";
    } else if (userAgent.includes("Edg")) {
        return "Microsoft Edge (Chromium)";
    } else if (userAgent.includes("Trident") || userAgent.includes("MSIE")) {
        return "Internet Explorer";
    } else if (userAgent.includes("Chrome")) {
        return "Google Chrome";
    } else if (userAgent.includes("Firefox")) {
        return "Mozilla Firefox";
    } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
        return "Apple Safari";
    } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
        return "Opera";
    } else {
        return "Unknown";
    }
}

function getOS(userAgent) {
    if (!userAgent) {
        return "Unknown";
    }

    if (userAgent.includes("Windows NT 10.0")) {
        return "Windows 10";
    } else if (userAgent.includes("Windows NT 6.3")) {
        return "Windows 8.1";
    } else if (userAgent.includes("Windows NT 6.2")) {
        return "Windows 8";
    } else if (userAgent.includes("Windows NT 6.1")) {
        return "Windows 7";
    } else if (userAgent.includes("Windows NT 5.1")) {
        return "Windows XP";
    } else if (userAgent.includes("Mac OS X")) {
        return "Mac OS X";
    } else if (userAgent.includes("Android")) {
        return "Android";
    } else if (userAgent.includes("iPhone")) {
        return "iOS";
    } else if (userAgent.includes("Linux")) {
        return "Linux";
    } else {
        return "Unknown";
    }
}

const LoginLog = () => {
    //   const [payloadData, setPayloadData] = useState({});

    //   // too many renders
    //   useEffect(() => {
    //     const token = localStorage.getItem('ACCESS_TOKEN');
    //     if (token) {
    //       const payloadBase64 = token.split('.')[1];
    //       const payload = JSON.parse(atob(payloadBase64));
    //       setPayloadData(payload);
    //     }
    //   }, []);

    //   const loginDate = new Date(payloadData.iat * 1000);
    //   // console.log(loginDate);
    //   console.log(loginDate.toLocaleString());
    //   console.log(payloadData.userAgent);
    //   console.log(payloadData.ipAddress);
    //   const OS = getOS(payloadData.userAgent);
    //   const browser = getBrowser(payloadData.userAgent);
    const token = localStorage.getItem('ACCESS_TOKEN');
    let payloadData = {};
    if (token) {
        const payloadBase64 = token.split('.')[1];
        payloadData = JSON.parse(atob(payloadBase64));
    }

    const loginDate = new Date(payloadData.iat * 1000);
    const OS = getOS(payloadData.userAgent);
    const browser = getBrowser(payloadData.userAgent);

    return (
        <div>
            <Header />
            <div>
                <h1>로그인 관리</h1>
                <p>최근 접속일시 <span>{loginDate.toLocaleString()}</span></p>
                <p>운영체제 <span>{OS}</span></p>
                <p>브라우저/앱 <span>{browser}</span></p>
                <p>IP <span>{payloadData.ipAddress}</span></p>
            </div>
            <Footer />
        </div>
    )
}

export default LoginLog;
