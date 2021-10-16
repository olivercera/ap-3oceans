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

import { useAuth } from '../../Auth.js';

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
    <div className="columns">
      <div className="column main-background">image</div>
      <div className="column">
        <label> Email address </label>
        <input class="input" type="text" placeholder="Text input" />

        <label> Password </label>
        <input class="input" type="text" placeholder="Text input" />

        <input onClick={login} class="button" type="submit" value="Login" />
      </div>
    </div>
  );
}
