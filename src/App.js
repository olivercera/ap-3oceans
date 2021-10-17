import React from 'react';
import { ProvideAuth, PrivateRoute } from './Auth.js';
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

import MainLayout from './layouts/Main.js';

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
          <MainLayout>
            <PrivateRoute path="/">
              <Recalada />
            </PrivateRoute>
          </MainLayout>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}
