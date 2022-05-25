import React from "react";
import { useState,useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./Final.css";

function Popup(props) {
  const [popShow, setPopShow] = useState(false);
  const [popData, setPopData] = useState({
    Name: "",
    Email: "",
    password: "",
    Age: "",
  });
  
console.log(props,"popopp")

  useEffect(()=>{
    if(props.passdata!== undefined){
   setPopData(props.passdata)
   setPopShow(props.show)
    }
  },[props.passdata, props.show])
  return (
    <div className="modal">
     
      <Modal
       
        size="sm"
        show={popShow}
        onHide={() => setPopShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">User Info</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <ul className="users">
            <li> Name:<p>{popData.Name}</p></li>
            <li>Email:<p>{popData.Email}</p></li>
            <li> Password:<p>{popData.password}</p></li>
            <li> Age:<p>{popData.Age}</p></li>
          </ul>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Popup;
