import React, { useState, useEffect } from 'react';
import './Recalada.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';

import { getRecaladas } from '../../API.js';

export default function Recalada() {
  const [page, setPage] = useState(1);
  const [recaladas, setRecaladas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRecaladas(page)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setRecaladas(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <div>
          <div className="is-flex is-flex-direction-row is-justify-content-space-between">
            <h1 className="title-table mb-4 mt-4">WELCOME TO RECALADAS</h1>
            <Link to= "/recalada/create" className="button button-table text-lato font-white">Add Recalada</Link>
          </div>
          <div className="table-cont mt-4">
            <table className="table is-fullwidth">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>RECALADA</th>
                  <th>BUQUE</th>
                  <th>EDIT</th>
                </tr>
              </thead>
              <tbody>
                {recaladas.map((recalada, index) => (
                  <tr>
                    <th>{recalada.id}</th>
                    <td>{recalada.nickname}</td>
                    <td>{recalada.contributions_count}</td>
                    <td>
                      <Link> <img src="./img/icons/dots.png"/></Link>
                      <Link> <img src="./img/icons/delete.png"/></Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    );
}