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
        // return response.json();

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return response.json();
        } else {
          return response.text();
        }

      } else if (response.status === 403) {
        window.location.href = "/";
      } else {
        // throw Error(response);
        return response.text().then(text => {
          throw new Error(text);
        });
      }

    })
  // .catch((error) => {
  //   console.log(error);
  // });
}


export function register(userDTO) {
  return call("/user", "POST", userDTO)
    .then((response) => {
      alert(response.name + "님, 회원 가입이 완료되었습니다.");
      // window.location.href = '/';
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
      // window.location.href = "/";
      return response;
    })
    .catch((error) => {
      console.log(error.message);
      // alert(`로그인에 실패했습니다. 현재 실패 횟수: ${error.message}`);

      if (error.message === "User already logged") {
        alert("이미 로그인된 사용자입니다.");
      } else if (!isNaN(error.message)) {
        alert(`로그인에 실패했습니다. 현재 실패 횟수: ${error.message}`);
      } else {
        alert("로그인에 실패했습니다.");
      }

      throw error;
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
  // const token = localStorage.getItem('ACCESS_TOKEN');
  // let payloadData = {};
  // if (token) {
  //   const payloadBase64 = token.split('.')[1];
  //   payloadData = JSON.parse(atob(payloadBase64));
  // }
  // if (payloadData.loginType == 1) {
  //   // 백엔드 로그아웃 엔드포인트 호출
  //   window.open("http://localhost:80/user/oauth/kakao/logout", 'logoutPopup', 'width=600,height=500');
  // }
  // // 액세스 토큰 제거
  // localStorage.removeItem("ACCESS_TOKEN");

  return new Promise((resolve, reject) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    let payloadData = {};
    if (token) {
      const payloadBase64 = token.split('.')[1];
      payloadData = JSON.parse(atob(payloadBase64));
    }

    if (payloadData.socialCode == 'kakao') {
      const popupURL = "http://localhost:80/user/oauth/kakao/logout";
      const width = 600;
      const height = 765;
      const left = window.screenX + (window.outerWidth - width) / 2;
      const top = window.screenY + (window.outerHeight - height) / 2;
      const logoutPopup = window.open(popupURL, "_blank", `width=${width},height=${height},left=${left},top=${top}`);

      // const checkPopupURLChange = setInterval(() => {
      //   if (logoutPopup.location.href === "http://localhost:3000/user/oauth/kakao/logout") {
      //     clearInterval(checkPopupURLChange);
      //     logoutPopup.close();
      //     localStorage.removeItem("ACCESS_TOKEN");
      //     resolve();
      //   }  
      // }, 100);

      window.addEventListener("message", (e) => {
        console.log("----------", e);
        if (e.data === "logoutCompleted") {
          call("/user/logout", "POST", { token })
            .then((response) => {
              alert(response + "님이 로그아웃했습니다.");
              localStorage.removeItem("ACCESS_TOKEN");
              localStorage.removeItem("REMAINING_TIME");
              resolve();
            })
            .catch((error) => {
              console.error("logout error", error);
              if (error instanceof Error && error.message.includes("User not found with id")) {
                localStorage.clear();
                window.location.reload();
              } else {
                console.error("Unexpected error occured during logout: ", error);
              }
            })
        }
      })

    } else if (payloadData.socialCode == 'naver') {
      const popupURL = "https://nid.naver.com/nidlogin.logout";
      const width = 600;
      const height = 765;
      const left = window.screenX + (window.outerWidth - width) / 2;
      const top = window.screenY + (window.outerHeight - height) / 2;
      const logoutPopup = window.open(popupURL, "_blank", `width=${width},height=${height},left=${left},top=${top}`);
      setTimeout(() => {
        logoutPopup.close();
      }, 500);
      call("/user/logout", "POST", { token })
        .then((response) => {
          alert(response + "님이 로그아웃했습니다.");
          localStorage.removeItem("ACCESS_TOKEN");
          localStorage.removeItem("REMAINING_TIME");
          resolve();
        })
        .catch((error) => {
          console.error("logout error", error);
          if (error instanceof Error && error.message.includes("User not found with id")) {
            localStorage.clear();
            window.location.reload();
          } else {
            console.error("Unexpected error occured during logout: ", error);
          }
        })
    }

    else {
      call("/user/logout", "POST", { token })
        .then((response) => {
          console.log(response);
          alert(response + "님이 로그아웃했습니다.");
          console.log(localStorage.getItem("REMAINING_TIME"));
          localStorage.removeItem("ACCESS_TOKEN");
          localStorage.removeItem("REMAINING_TIME");
          // localStorage.clear();
          console.log(localStorage.getItem("REMAINING_TIME"));
          resolve();
        })
        .catch((error) => {
          console.error("logout error", error);
          if (error instanceof Error && error.message.includes("User not found with id")) {
            localStorage.clear();
            window.location.reload();
          } else {
            console.error("Unexpected error occured during logout: ", error);
          }
        })
    }
  });
}

export function emailAuth(emailDTO) {
  return call("/auth/email/verify", "POST", emailDTO)
    .then((response) => {
      console.log(response);
      return response;
    })
}

export function getUserInfo(userDTO) {
  return call("/user/userinfo/authentication", "POST", userDTO)
    .then((response) => {
      console.log(response);
      return response;
    })
}

export function matchPassword(userDTO) {
  return call("/user/password/authentication", "POST", userDTO)
    .then((response) => {
      console.log(response);
      return response;
    })
}

export function resetPassword(userDTO) {
  return call("/user/password/reset", "POST", userDTO)
    .then((response) => {
      console.log(response);
      return response;
    })
}

export function resetEmail(userDTO) {
  return call("/user/email/update", "POST", userDTO)
    .then((response) => {
      console.log(response);
      return response;
    })
}

export function findId(userDTO) {
  return call("/user/username/retrieve", "POST", userDTO)
    .then((response) => {
      console.log(response);
      return response;
    })
}

export function findPassword(userDTO) {
  return call("/user/password/request", "POST", userDTO)
    .then((response) => {
      console.log(response);
      return response;
    })
}

export function updatePassword(userDTO) {
  return call("/user/password/retrieve", "POST", userDTO)
    .then((response) => {
      console.log(response);
      return response;
    })
}

export function getName() {
  return call("/user/name/request", "POST",)
    .then((response) => {
      console.log(response);
      return response;
    })
}