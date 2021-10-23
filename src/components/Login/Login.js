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
   
    <div className="container-principal columns is-flex is-flex-direction-row">
      <div className="col-1 column is-6">
        <div className="container-logo" >
          <img src="./img/logo.png" alt="" className="logo-1"/>
        </div>
        <div className="container-img"  style={styles.paperContainer}>
        </div>

      </div>
      <div className="col-2 column is-6">
        <div className="container-col-2">
          <h1 className="h1-title">Welcome to 3 OCEANS</h1>
          <p className="p-subtitle">Lorem ipsum dolor sit amet consectetur</p>
          <form className="container-form">
            <div className="field">
              <label className="label">Email Address</label>
              <div className="control">
                <input className="input" type="email" placeholder="Enter email address" />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input" type="password" placeholder="Enter password" />
              </div>
            </div>
            <div className="link label">
              <Link>Forgot password?</Link>
            </div>
            <div className="field">
              <p className="control">
              <input onClick={login} className="button button color-buttons" type="submit" value="Login" />
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