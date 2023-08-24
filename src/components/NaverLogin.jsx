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
    const CLIENT_ID = '71f8YZyRKEl1IY5p4qFL'
    const CALLBACK_URL = 'http://localhost:3000/naverLogin'
    const STATE_STRING = 'false'
    const naverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${CALLBACK_URL}`

    // const handleLogin = () => {
    //     window.location.href = naverURL
    // }
    // const code = new URL(window.location.href).searchParams.get("code");
    // console.log(code);

    const handleLogin = () => {
        const popup = window.open(naverURL, '_blank', 'width=500,height=600');
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
            <Button onClick={handleLogin}>네이버 로그인</Button>
        </>
    )
}
export default NaverLogin