import React from 'react';
import './Recalada.css';

export default function RecaladaManage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>
      <h1 class="title-table mb-4 mt-4">NEW RECALADAS</h1>
        <div class="table-cont columns is-flex">
          <div class="column is-10 is-flex is-flex-direction-column p-6" >

            <label>Action</label>
            <div class="is-flex is-flex-direction-row  mt-2">
              <div class="select width-select mr-4">
                <select class="select-style">
                  <option>Select action</option>
                  <option>Export</option>
                  <option>Import</option>
                </select>
              </div>
              <div>
                <button class=" button button-add is-flex is-align-items-center">
                  <img class="icon-menu" src="./img/icons/add.png" />
                  Add new Action</button>
              </div>
              
            </div>

            <label class="mt-4">Terminal</label>
            <div class="is-flex is-flex-direction-row  mt-2">
            <div class="select width-select mr-4">
              <select class="select-style">
                <option>Select terminal</option>
                <option>Export</option>
                <option>Import</option>

              </select>
            </div>
              <div>
                <button class=" button button-add">
                  <img class="icon-menu" src="./img/icons/add.png" />
                  Add new Terminal</button>
              </div>
            </div>

            <label class="mt-4">Product</label>
            <div class="is-flex is-flex-direction-row  mt-2">
            <div class="select width-select mr-4">
              <select class="select-style">
                <option>Select product</option>
                <option>Export</option>
                <option>Import</option>

              </select>
            </div>
              <div>
                <button class=" button button-add">
                  <img class="icon-menu" src="./img/icons/add.png" />
                  Add new Product</button>
              </div>
            </div>

            
           
          </div>
        </div>
        <div class="is-flex is-justify-content-flex-end is-align-items-center mt-6">
          <a>Cancel</a> <button class="button button-table text-lato font-white ml-6" type="submit">Add Recalada</button>
        </div>
      </form>
    </div>
  );
}