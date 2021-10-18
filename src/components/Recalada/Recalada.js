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
      Welcome to recaladas <Link to="/recalada/create">Add Recalada</Link>
      <div>
        <div className="box">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <abbr title="Position">ID</abbr>
                </th>
                <th>Team</th>
                <th>
                  <abbr title="Played">Recalada</abbr>
                </th>
                <th>
                  <abbr title="Won">Buque</abbr>
                </th>
                <th>
                  <abbr title="Drawn">Edit</abbr>
                </th>
              </tr>
            </thead>
            <tbody>
              {recaladas.map((recalada, index) => (
                <tr>
                  <th>{recalada.id}</th>
                  <td>{recalada.nickname}</td>
                  <td>{recalada.contributions_count}</td>
                  <td>botones</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
