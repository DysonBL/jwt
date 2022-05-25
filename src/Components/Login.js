import React, { useState } from "react";
import {
  Button,
  Form,
  FormCheck,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import axios from "axios";
import TokenService from "./TokenService";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const [Data, setData] = useState({})
  
  const handleChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
    console.log(Data, "login data");
  };
  const loginSubmit = (e) => {
    if(Data && Object.keys(Data).length>0){
      localStorage.setItem("Login",JSON.stringify(Data));

    }
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/login`, Data)
      .then((res) => {
        console.log(res, "LOGIN Data");

        TokenService.setAccessToken(res.data.Token);
        TokenService.setRefreshToken(res.data.refreshToken);
      })
      .catch((error) => {
        console.log("LOGIN INSIDE THEN ", error);
      });

    navigate("/Page");
  };
  return (
    <div>
      <div className="Margin">
        <h1>LOGIN</h1>
        <Form className="login">
          <Form.Group className="lable" controlId="formBasicEmail">
            <InputGroup>
              <div className="container">
                <InputGroup.Text id="basic-addon1">Mail ID</InputGroup.Text>
                <FormControl
                  placeholder="name@gmail.com"
                  name="Mail"
                  aria-describedby="basic-addon1"
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  Don't use in capital
                </Form.Text>
              </div>
            </InputGroup>
          </Form.Group>

          <div className="container">
            <InputGroup.Text id="basic-addon1">New Password</InputGroup.Text>
            <FormControl
              placeholder="Password"
              name="password"
              type="password"
              aria-describedby="basic-addon1"
              onChange={handleChange}
            />
          </div>
          <Form.Group className="lable" controlId="formBasicCheckbox">
            <FormCheck
              onChange={handleChange}
              type="checkbox"
              label="Check me out"
            />
          </Form.Group>
          <div className="btnAlign">
            <Button
              className="btnAlign"
              size="lg"
              variant="primary"
              type="submit"
              onClick={loginSubmit}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
