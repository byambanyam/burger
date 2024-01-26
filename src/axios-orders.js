import axios from "axios";
const instance = axios.create({
  baseURL:
    "https://bugertest-8ca5f-default-rtdb.asia-southeast1.firebasedatabase.app/",
});
export default instance;
