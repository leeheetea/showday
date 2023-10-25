import axios from "axios";

function callAxios(url, setItems){
  axios.get(url)
    .then((response)=>{
      setItems(response.data);
    })
    .catch((error)=>{
      console.log("Error while fetching ..... : ", error)
    })
}

export default callAxios