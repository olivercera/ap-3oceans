import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";

import "./Recalada.css";

export default function RecaladaManage() {
  const [modal, setModal] = useState(false);
  console.log(modal)
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOpen = () => {
    setModal(true);
  };

  const handleClose = () => {
   
    setModal(false);

  }

 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="title-table mb-4 mt-4">NEW RECALADAS</h1>
        <div className="table-cont columns is-flex">
          <div className="column is-10 is-flex is-flex-direction-column p-6">
            <label>Action</label>
            <div className="is-flex is-flex-direction-row  mt-2">
              <div className="select width-select mr-4">
                <select className="select-style">
                  <option>Select action</option>
                  <option>Export</option>
                  <option>Import</option>
                </select>
              </div>
              <div>
                <Link
                  to="/modal"
                  className=" button button-add is-flex is-align-items-center"
                >
                  <img
                    className="icon-menu-add mr-2"
                    src="./img/icons/add.png"
                  />
                  Add new Action
                </Link>
              </div>
            </div>

            <label className="mt-4">Terminal</label>
            <div className="is-flex is-flex-direction-row  mt-2">
              <div className="select width-select mr-4">
                <select className="select-style">
                  <option>Select terminal</option>
                  <option>Export</option>
                  <option>Import</option>
                </select>
              </div>
              <div>
                <button
                  onClick={handleOpen}
                  className=" button button-add is-flex is-align-items-center"
                > 
                {/* {modal ?  : null} */}
                  <img
                    className="icon-menu-add mr-2"
                    src="./img/icons/add.png"
                  />
                  Add new Terminal
                </button>
              </div>
            </div>

         

            <label className="mt-4">Product</label>
            <div className="is-flex is-flex-direction-row  mt-2">
              <div className="select width-select mr-4">
                <select className="select-style">
                  <option>Select product</option>
                  <option>Export</option>
                  <option>Import</option>
                </select>
              </div>
              <div>
                <Link
                  to="/modal"
                  className=" button button-add is-flex is-align-items-center"
                >
                  <img
                    className="icon-menu-add mr-2"
                    src="./img/icons/add.png"
                  />
                  Add new Product
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="is-flex is-justify-content-flex-end is-align-items-center mt-6">
          <a>Cancel</a>{" "}
          <button
            className="button button-table text-lato font-white ml-6"
            type="submit"
          >
            Add Recalada
          </button>
        </div>
      </form>
    </div>
  );
}
