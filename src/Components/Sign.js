import React, { useState } from "react";
import {
  Button,
  Form,
  InputGroup,
  FormControl,
  FormCheck,
} from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Uploads from "./Uploads/Uploads";

const Sign = () => {
let navigate=useNavigate()
  const [Data, setData] = useState({
    Name: ",",
    Sname: "",
    Mail: "",
    password: "",
  });
  const handleChange = async (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
    console.log(Data, "sign");
  };
  const signSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("signup",JSON.stringify(Data));

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/signup`,Data)
      .then((res) => {
        console.log(res, "SIGNUP Data");
      })
      .catch((error) => {
        console.log("SIGNUP INSIDE THEN ", error);
      });
    navigate("/Login");
  };

  return (
    <div>
      <div>
      {/* <Uploads/> */}

        <div className="Margin">
          <h1>SIGNIN</h1>
          <Form className="sign" onSubmit={signSubmit}>
            <InputGroup>
              <div className="container">
                <InputGroup.Text id="basic-addon1">First name</InputGroup.Text>
                <FormControl
                  placeholder="First name"
                  name="Name"
                  type="Name"
                  onChange={handleChange}
                />
              </div>
              <div className="container">
                <InputGroup.Text id="basic-addon1">Second name</InputGroup.Text>
                <FormControl
                  placeholder="Second name"
                  name="Sname"
                  type="Sname"
                  onChange={handleChange}
                />
              </div>
            </InputGroup>
            <InputGroup>
              <div className="container">
                <InputGroup.Text id="basic-addon1">Mail ID</InputGroup.Text>
                <FormControl
                  placeholder="name@gmail.com"
                  name="Mail"
                  type="Mail"
                  aria-describedby="basic-addon1"
                  onChange={handleChange}
                />
              </div>
            </InputGroup>
            <InputGroup className="">
              
              <div className="container">
                <InputGroup.Text id="basic-addon1">
                Password
                </InputGroup.Text>
                <FormControl
                  placeholder="Conform password"
                  type="password"
                  name="password"

                  aria-describedby="basic-addon1"
                  onChange={handleChange}
                />
              </div>
              <Form.Group className="lable">
                <FormCheck
                  onChange={handleChange}
                  type="checkbox"
                  label="Agree with sign In"
                />
              </Form.Group>
            </InputGroup>
            <div className="btnAlign">
              <Button
                className="center"
                size="lg"
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Sign;
