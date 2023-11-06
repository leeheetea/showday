import { API_BASE_URL } from "./api-config";

export function call(api, method, request){
  let headers = new Headers({
    "Content-Type" : "application/json"
  });
}

// export function readShow(showId){
//   return call(`/detailpage/${showId}`, "GET")
//     .then((response)=>{
//       console.log("response : " + response );
//       return response.data;
//     })
//     .catch()
// }

