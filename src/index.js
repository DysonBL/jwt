import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import TokenService from "./Components/TokenService";
import axios from "axios";

axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

//Interceptors
axios.interceptors.request.use((request, _response) => {
  console.log(request, "axios - Interceptor goes to meet");
  const Token = TokenService.getAccessToken();
  console.log(Token, "getAccessToken========>");
  request.headers = {
    "x-access-token": Token,
    "Content-Type": "application/json",
  };
  return request;
});
axios.interceptors.response.use(
  (res) => {
    console.log(res, "axios-from interceptor res comes");
    return res;
  },
  async (error) => {
    console.log(error, "Error from interceptor res");
    const originconfig = error.config;
    if (error.response.status === 401) {
      console.log("Error comes after 1min ", error.response.data);
      if (
        error.response.data.Message === "Unauthorized! AccessToken was expired!"
      ) {
        try {
          console.log("tryyyy in side", error.response.data.Message);
          let refresh = TokenService.getRefreshToken();
          console.log("1hr Refresh token ", refresh);
          const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/refresh`, {
            "x-access-token": refresh,
            "content-type": "application/json",
          });
          console.log("refresh api called", res.data.status.Token);
          TokenService.UpdateAccessToken(res.data.status.Token);
          axios.defaults.headers.common["x-access-token"] = res.data.data.Token;
          return axios(originconfig);
        } catch (error) {
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(error);
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
