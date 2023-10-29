import styled from "styled-components";
import { API_BASE_URL } from "../page/ApiService";
import { decodeIdToken } from "./DecodeIdToken";

const Button = styled.button`
  width: 100%;
  height: 100%;
  background-color: #ffde00;
  color: #3b1e1e;
  text-decoration: none;
  font-size: 15px;
  border: none;
  border-radius: 4px;
`;

const KakaoLogin = () => {
  const REST_API_KEY = "98fb1054fadbc801e5b9337e8492549d";
  //https://developers.kakao.com/docs/latest/ko/index
  const REDIRECT_URL = "http://localhost:3000/user/oauth/kakao";
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;

  // const handleLogin = () => {
  //     window.location.href = kakaoURL
  // }
  // const code = new URL(window.location.href).searchParams.get("code");
  // console.log(code);
  const width = 500;
  const height = 600;
  const left = window.screenX + (window.outerWidth - width) / 2;
  const top = window.screenY + (window.outerHeight - height) / 2;

  const messageHandler = (event) => {
    if (event.data.type === "KAKAO_AUTH") {
      fetch("http://localhost:80/user/oauth/kakao?code=" + event.data.code, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(res => res.json())
        .then(response => {
          localStorage.setItem("ACCESS_TOKEN", response.token);
          alert(response.username + "님이 로그인했습니다.");
          window.location.href = "/";
        })
        .catch(error => {
          console.error("Error:", error);
        });

      window.removeEventListener("message", messageHandler);
    }
  };

  const handleLogin = () => {
    const popup = window.open(kakaoURL, "_blank", `width=${width},height=${height},left=${left},top=${top}`);
    window.addEventListener("message", messageHandler);
  };

  return (
    <>
      <Button onClick={handleLogin}>카카오 계정으로 로그인</Button>
    </>
  );
};
export default KakaoLogin;
