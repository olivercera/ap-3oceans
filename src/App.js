import React from 'react';
import {ProvideAuth, PrivateRoute} from './Auth.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';
import './style.css';
import 'bulma/css/bulma.css';

import Login from './components/Login/Login.js';
import Recalada from './components/Recalada/Recalada.js';


export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/">
            <div>sidebar aca podra servir?</div>
            <Recalada />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}
