import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from './../Auth.js';
import './Sidebar.css';

export default function Sidebar() {
  let history = useHistory();
  let auth = useAuth();

  return (
    <div className="columns body-home is-align-items-center">
          <div className="column is-flex is-justify-content-start">
          <div className="menu-sidebar is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center">
            <div className="is-flex is-flex-direction-column">
              <img src="./img/icons/home.svg" alt="" className="icon-menu" />
              <img src="./img/icons/user.svg" alt="" className="icon-menu" />
            </div>
            <div>
              <img src="./img/icons/logout.svg" alt="" className="icon-menu"  onClick={() => {
          auth.signout(() => history.push('/'));
        }}/>
            </div>
          </div>
        </div>
    </div>
  );
}