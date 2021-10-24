import React, { useState, useEffect } from "react";
import "./Recalada.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

import ReactPaginate from "react-paginate";

import { getRecaladas } from "../../API.js";

export default function Recalada() {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  const [page, setPage] = useState(1);
  const [recaladas, setRecaladas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRecaladas(page)
      .then((res) => res.json())
      .then((response) => {
        setRecaladas(response);
        setIsLoading(false);
        const data = response;
        const slice = data.slice(offset, offset + perPage);
        const postData = slice.map((pd) => (
          <tr key={pd.id}>
            <th>{pd.id}</th>
            <td>{pd.nickname}</td>
            <td>{pd.contributions_count}</td>
            <td>
              <img className="icon-dots" src="./img/icons/dots.png" />
              <img className="icon-delete ml-4" src="./img/icons/delete.png" />
            </td>
          </tr>
        ));
        setData(postData);
        setPageCount(Math.ceil(data.length / perPage));
      })
      .catch((error) => console.log(error));
  }, [page, offset]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  return (
    <div>
      <div className="is-flex is-flex-direction-row is-justify-content-space-between">
        <h1 className="title-table mb-4 mt-4">WELCOME TO RECALADAS</h1>
        <Link
          to="/recalada/create"
          className="button button-table text-lato font-white"
        >
          Add Recalada
        </Link>
      </div>
      <div className="table-cont">
        <table className="table is-fullwidth table-cont">
          <thead>
            <tr className="table-items">
              <th>ID</th>
              <th>RECALADA</th>
              <th>BUQUE</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {/* {recaladas.map((recalada, index) => (
                  
                  <tr>
                    <th>{recalada.id}</th>
                    <td>{recalada.nickname}</td>
                    <td>{recalada.contributions_count}</td>
                    <td>
                      <img className='icon-dots' src="./img/icons/dots.png"/>
                      <img className='icon-delete ml-4' src="./img/icons/delete.png"/>
                    </td>
                  </tr>
                ))} */}
            {data}
          </tbody>
        </table>
        <div>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </div>
  );
}
