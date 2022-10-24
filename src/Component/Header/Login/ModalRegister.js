import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./ModalRegister.css";
import LogImg from "../../../img/loginPic.png";

function ModalRegister({ open, onClose }) {
  if (!open) return null;
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  return (
    <div className="modalContainer">
      <p className="closeBtn" onClick={onClose}>
        X
      </p>
      <div className="modalRight">
        <img src={LogImg} alt="" />
      </div>
      <div className="modalLeft">
        <h3>Create Account</h3>
        <form>
          <input type="text" name="name" placeholder="First Name" />
        </form>
      </div>
    </div>
  );
}

export default ModalRegister;
