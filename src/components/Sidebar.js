import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from './../Auth.js';
import './Sidebar.css';

export default function Sidebar() {
  let history = useHistory();
  let auth = useAuth();

  return (
    <div class="columns body-home is-align-items-center">
          <div class="column is-flex is-justify-content-start">
          <div class="menu-sidebar is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center">
            <div class="is-flex is-flex-direction-column">
              <img src="./img/icons/Vector.png" alt="" class="icon-menu" />
              <img src="./img/icons/Vector2.png" alt="" class="icon-menu" />
            </div>
            <div>
              <img src="./img/icons/Group.png" alt="" class="icon-menu"  onClick={() => {
          auth.signout(() => history.push('/'));
        }}/>
            </div>
          </div>
        </div>
    </div>
  );
}