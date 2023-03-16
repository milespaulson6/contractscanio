import axios from "axios";

export default axios.create({
  baseURL: "http://127.0.0.1:8000", //put URL from REST API here
  headers: {
    "Content-type": "application/json"
  }
});