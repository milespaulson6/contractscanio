import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080", //put URL from REST API here
  headers: {
    "Content-type": "application/json"
  }
});