import React, { useState } from "react";
import "./Slide.css";
import {
  Navbar,
  Container,
  Form,
  FormControl,
  Offcanvas,
  Button,
  Nav,
  NavDropdown,
} from "react-bootstrap";
const Slides = () => {
  const [Show, setShow] = useState(false);
  const [on, setOn] = useState(JSON.parse(localStorage.getItem("Shops")));

  const handleShow = () => {
    console.log("slideOpen");
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
    console.log("hi");
  };
  const handleSubmit=()=>{
    localStorage.removeItem("Login")
    window.location.reload(true);

  }

  const handleClick = (e, value) => {
    localStorage.setItem("Shops", JSON.stringify(e.target.value));
    setOn(JSON.parse(localStorage.getItem("Shops")));
    // setOn(value)
    // console.log(on,value,"ON")
    // console.log(e.target.value,"etarget")
    console.log(e, "eee");
  };
  const Shops = [
    {
      name: "JP.Fruits",
      value: "0",
    },
    {
      name: "HD.Fruits",
      value: "1",
    },
    {
      name: "HG.Fruits",
      value: "2",
    },
    {
      name: "BL.Fruits",
      value: "3",
    },
    {
      name: "SL.Fruits",
      value: "4",
    },
  ];

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <div>
          <Button variant="primary" onClick={handleShow}>
            <div className="menu"></div>
            <div className="menu"></div>
            <div className="menu"></div>
          </Button>
        </div>
        <div className="offcanvas">
          <Offcanvas show={Show} onHide={handleClose}>
            <Offcanvas.Header closeButton className="header">
              <Offcanvas.Title>BLACK PAIYAN</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="slideBody">
              <hr />
              <div>
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </div>
              <hr />

              <div className="subnav">
                <p className="subnavbtn">ALL ITEMS</p>
                <div className="subnav-content">
                  <div className="dropdown-content">
                    <ol>
                      <hr />
                      <li className="subnav">
                        <a href="https://images.news18.com/ibnlive/uploads/2022/01/fresh-fruits.jpg">
                          <li className="items">FRUITS</li>
                        </a>
                        <hr />
                        <a href="https://image.shutterstock.com/image-photo/snack-food-collection-sticks-chips-260nw-1135983587.jpg">
                          <li className="items">SNAKS</li>
                        </a>
                        <hr />
                        <a href="https://st3.depositphotos.com/4431055/16123/i/1600/depositphotos_161238116-stock-photo-glasses-of-fresh-juice.jpg">
                          <li className="items">JUICE</li>
                        </a>
                        <hr />
                        <a href="https://img.etimg.com/thumb/msid-84939728,width-1200,height-900,imgsize-381352,resizemode-8,quality-100/magazines/panache/from-the-us-russia-to-india-an-ice-cream-bowl-has-a-long-political-history.jpg">
                          <li className="items">ICE CREAMS</li>
                        </a>
                        <hr />
                        <a href="https://media-cdn.tripadvisor.com/media/photo-s/0e/96/7f/97/coffe-latte-100-arabica.jpg">
                          <li className="items">COFFEE</li>
                        </a>
                        <hr />
                        <a href="https://i.pinimg.com/originals/40/00/3a/40003ab04247c5faa862680dc9e904c9.jpg">
                          <li className="items">CAKE</li>
                        </a>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <hr />
              <div className="listbody">
                <NavDropdown title="FRUITS MENU">
                  <NavDropdown.Item>
                    <div className="items">
                      <li>
                        <div className="subnav">
                          APPLE
                          <div className="subnav-content">
                            <div className="dropdown-content">
                              <hr />
                              <li className="element">
                                <li>Green Apple</li>
                                <li>Royal Apple</li>
                              </li>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li> ORANGE</li>
                      <li>BANANA</li>
                      <li>
                        <div className="subnav">
                          GRAPES
                          <div className="subnav-content">
                            <div className="dropdown-content">
                              <hr />
                              <li className="element">
                                <li>Green Grapes</li>
                                <li>Black Grapes</li>
                              </li>
                            </div>
                          </div>
                        </div>
                      </li>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>

                <div className="list">
                  <NavDropdown title="JUICE MENU">
                    <NavDropdown.Item>
                      <div className="items">
                        <li>AMLA</li>
                        <li>LEMON</li>
                        <li>ROSE MILK</li>
                        <li>BADHAM MILK</li>
                      </div>
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>

                <div className="list">
                  <NavDropdown title="SNAKS MENU">
                    <NavDropdown.Item>
                      <div className="items">
                        <div className="subnav">
                          BISKETS
                          <div className="subnav-content">
                            <div className="dropdown-content">
                              <hr />
                              <li className="element">
                                <li>Britaniya</li>
                                <li>Orieo</li>
                                <li>50-50</li>
                                <li>Dark Fantacy</li>
                              </li>
                            </div>
                          </div>
                        </div>
                        <li>CAKES</li>
                        <li>JANGREE</li>
                        <li>JAMS</li>
                      </div>
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
                <div className="list">
                  <NavDropdown title="ICE CREAMS">
                    <NavDropdown.Item>
                      <div className="items">
                        <li>VENNILA</li>
                        <li>BUTTERSCATCH</li>
                        <li>CHOCULATE</li>
                        <li>ROSE COLOR</li>
                      </div>
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
                <div className="list ">
                  <NavDropdown title="COFEE ITEMS">
                    <NavDropdown.Item>
                      <div className="items ">
                        <li>COOL COFEE</li>
                        <li>HOT COFEE</li>
                        <li>BRU COFEE</li>
                        <li>VERA THERLA</li>
                      </div>
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
                <div className="list ">
                  <NavDropdown title="CAKE ITEMS">
                    <NavDropdown.Item>
                      <div className="items ">
                        <li>BLACK FOREST</li>
                        <li>ICE CAKE</li>
                        <li>BIRTH DAY CAKE</li>
                        <li>PLUM CAKE</li>
                      </div>
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </div>
              <div>
                <ul className="tree">
                  <li className="section">
                    <input type="checkbox" id="groupC" />
                    <label htmlFor="groupC">FRUITS SHOPS</label>
                    <ul>
                      <li className="section">
                        {Shops.map((item, value) => {
                          
                          return (
                            <li
                              className={`${value === on ? "Shops" : "no"}`}
                              onClick={handleClick}
                              value={item.value}
                              key={value}
                            >
                              {item.name}
                            </li>
                          );
                        })}
                      </li>
                    </ul>
                  </li>
                   <li className="section">
                    <input type="checkbox" id="groupB" />
                    <label htmlFor="groupB">Juice SHOPS</label>
                    <ul>
                    <li className="section">
                        {Shops.map((item, value) => {
                          return (
                            <li
                              className={`${value === on ? "juice" : "glass"}`}
                              onClick={handleClick}
                              value={item.value}
                              key={value}
                            >
                              {item.name}
                            </li>
                          );
                        })}
                      </li>
                     
                      <li className="section">
                        <input type="checkbox" id="groupC" />
                        <label htmlFor="groupC">ICECream SHOPS</label>
                        <ul>
                          <li>ARUN ICECream</li>
                          <li>Arockiya ICECream</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>

        <div className="main">
          <a className="navbar-brand">
            <img
              src="https://cdn4.vectorstock.com/i/1000x1000/88/33/fresh-fruit-salad-in-blue-bowl-isolated-on-white-vector-21428833.jpg"
              alt=""
              width="50"
              height="40"
            />
          </a>
        </div>
        <Container>
          <Navbar.Brand href="">JWT_Learn</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Signup</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Button onClick={handleSubmit}>LOGOUT</Button>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="info">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
};

export default Slides;
