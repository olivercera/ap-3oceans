import React from 'react';
import './Login.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';

// import background1 from '../../../public/img/img-login.png';

import { useAuth } from '../../Auth.js';

const styles = {
  paperContainer: {
      height: 700,
      backgroundImage: `url(${"/img/img-login.png"})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
     backgroundPosition: 'center',
  
  }
};

export default function App() {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: '/' } };
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };


  return (

    <>
   
    <div class="container-principal columns is-flex is-flex-direction-row">
      <div class="col-1 column is-6">
        <div class="container-logo" >
          <img src="./img/logo.png" alt="" class="logo-1"/>
        </div>
        <div class="container-img"  style={styles.paperContainer}>
        </div>

      </div>
      <div class="col-2 column is-6">
        <div class="container-col-2">
          <h1 class="h1-title">Welcome to 3 OCEANS</h1>
          <p class="p-subtitle">Lorem ipsum dolor sit amet consectetur</p>
          <form class="container-form">
            <div class="field">
              <label class="label">Email Address</label>
              <div class="control">
                <input class="input" type="email" placeholder="Enter email address" />
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" type="password" placeholder="Enter password" />
              </div>
            </div>
            <div class="link label">
              <Link>Forgot password?</Link>
            </div>
            <div class="field">
              <p class="control">
              <input onClick={login} class="button button color-buttons" type="submit" value="Login" />
              </p>
            </div>
          </form>
<p>2021 all rights reserved</p>
        </div>
      </div>
    </div>
    </>
  );
}