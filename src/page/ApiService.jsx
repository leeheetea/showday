import { useState } from "react";

const API_BASE_URL = "http://localhost:80";

export function call(api, method, request) {
  let headers = new Headers({
    "Content-Type": "application/json"
  });

  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken && accessToken != null) {
    headers.append("Authorization", "Bearer " + accessToken);
  }

  let options = {
    headers: headers,
    url: API_BASE_URL + api,
    method: method,
  };

  if (request) {
    options.body = JSON.stringify(request);
  }

  return fetch(options.url, options)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 403) {
        window.location.href = "/";
      } else {
        // throw Error(response);
        return response.text().then(text => {
          throw new Error(text);
        });
      }

    }).catch((error) => {
      console.log(error);
    });
}


export function register(userDTO) {
  return call("/user", "POST", userDTO)
    .then((response) => {
      alert(response.name + "님, 회원 가입이 완료되었습니다.");
      window.location.href = '/';
    });
}

const tokenExpirationTime = 10 * 60 * 1000; // ms

export function login(userDTO) {
  return call("/user/login", "POST", userDTO)
    .then((response) => {
      localStorage.setItem("ACCESS_TOKEN", response.token);
      // console.log("response : ", response);
      // setTimeout(() => {
      //   logout();
      // }, tokenExpirationTime); 

      alert(response.username + "님이 로그인했습니다.");
      window.location.href = "/";
    });
}

// export function logout() {
//   // localStorage.setItem("ACCESS_TOKEN", null); 
//   // localStorage.removeItem("ACCESS_TOKEN");
//   return new Promise((resolve) => {
//     localStorage.removeItem("ACCESS_TOKEN");
//     resolve();
//   })
// }

export function logout() {
  // 액세스 토큰 제거
  localStorage.removeItem("ACCESS_TOKEN");
  
  // 백엔드 로그아웃 엔드포인트 호출
  window.location.href = "http://localhost:80/user/oauth/kakao/logout";
}




export function emailAuth(emailDTO) {
  return call("/auth/email/verify", "POST", emailDTO)
    .then((response) => {
      return response;
    })
}