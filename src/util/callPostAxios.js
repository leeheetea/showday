import axios from "axios";

function callPostAxios(url, data, onSuccess) {
  axios.post(url,data)
  .then((response) => {
    onSuccess(response.data);
    })
    .catch((error) => {
      console.log("Error while fetching ..... : ", error)
    });
}

export default callPostAxios;
