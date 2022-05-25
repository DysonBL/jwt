import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import TokenService from "./TokenService";

function Page() {
  const [state, setState] = useState([]);
  useEffect(() => {
    console.log("access token", TokenService.getAccessToken());
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/user`, {
        headers: { "x-access-token": TokenService.getAccessToken() },
      })
      .then((res) => {
        console.log(res, "PAGE Data");
        setState(res.data.item);
      })
      .catch((error) => {
        console.log("PAGE INSIDE NO CONDENT ", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pages");

    console.log(state, "states");
  };

  return (
    <div>
      <h1>THIS IS YOUR CHOISE...</h1>
      <div className="row sm-6 col-md-8">
        <div className="col-12 sm-6 ">
          <div className="row">
            {state &&
              state.map((item) => {
                return (
                  <div className="col-4">
                    <Card style={{ width: "25rem" }}>
                      <Card.Img className="cardIimg" variant="top" src={item.url} />
                      <Card.Body>
                        <Card.Title>{item.Name}</Card.Title>
                        <Card.Text>Price:{item.Price}</Card.Text>
                        <div className="d-flex ">
                          <Button
                            style={{ margin: "2px" }}
                            variant="primary"
                            onClick={handleSubmit}
                          >
                            click
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
