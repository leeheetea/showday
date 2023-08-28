//https://developers.naver.com/docs/common/openapiguide/apicall.md#%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EB%B0%A9%EC%8B%9D-%EC%98%A4%ED%94%88-api-%ED%98%B8%EC%B6%9C-%EC%98%88

import styled from 'styled-components'

const Button = styled.button`
    width: 100%;
    height: 100%;
    background-color: #279c00;
    color: white;
    text-decoration: none;
    font-size: 15px;
    border: none;
    border-radius: 4px;
    `

const NaverLogin = () => {
    const CLIENT_ID = '71f8YZyRKEl1IY5p4qFL';
    const CALLBACK_URL = 'http://localhost:3000/callback';
    const STATE_STRING = 'false';
    const naverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${CALLBACK_URL}`;

    // const handleLogin = () => {
    //     window.location.href = naverURL
    // }
    // const code = new URL(window.location.href).searchParams.get("code");
    // console.log(code);

    const width = 500;
    const height = 600;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    const handleLogin = () => {
        const popup = window.open(naverURL, '_blank', `width=${width},height=${height},left=${left},top=${top}`);
        window.addEventListener('message', (event) => {
            if (event.source === popup) {
                const data = event.data; // 로그인 결과 데이터
                console.log('로그인 결과:', data);
                popup.close();
            }
        });
    };

    return (
        <>
            <Button onClick={handleLogin}>네이버 계정으로 로그인</Button>
        </>
    )
}
export default NaverLogin