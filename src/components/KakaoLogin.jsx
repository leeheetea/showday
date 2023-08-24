import styled from 'styled-components'

const Button = styled.button`
    width: 100%;
    height: 100%;
    background-color: #ffde00;
    color: #3b1e1e;
    text-decoration: none;
    font-size: 15px;
    border: none;
    border-radius: 4px;
    `

const KakaoLogin = () => {
    const REST_API_KEY = '98fb1054fadbc801e5b9337e8492549d'
    const REDIRECT_URL = 'https://localhost:3000/auth'
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`

    // const handleLogin = () => {
    //     window.location.href = kakaoURL
    // }
    // const code = new URL(window.location.href).searchParams.get("code");
    // console.log(code);

    const handleLogin = () => {
        const popup = window.open(kakaoURL, '_blank', 'width=500,height=600');
        window.addEventListener('message', (event) => {
            if (event.source === popup) {
                const data = event.data; // 로그인 결과 데이터
                console.log('로그인 결과:', data);
                popup.close();
            }
        });
    }

    return (
        <>
            <Button onClick={handleLogin}>카카오 로그인</Button>
        </>
    )
}
export default KakaoLogin