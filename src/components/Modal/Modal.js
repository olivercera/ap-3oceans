import React, { useState } from "react";

import "./Modal.css";

export default function Modal({ handleClose }) {

  console.log(handleClose)

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <p className="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
        </p>
      </div>
      <button className="modal-close is-large" onClick={()=>handleClose} aria-label="close"></button>
    </div>
  );
}
