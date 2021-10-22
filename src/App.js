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
import RecaladaManage from './components/Recalada/RecaladaManage.js';

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" component={MainLayout}/>        
          <Route path="/recalada" component={Recalada}/>
          {/* <MainLayout>
            <PrivateRoute exact path="/">
              <Recalada />
            </PrivateRoute>
            <PrivateRoute exact path="/recalada/create">
              <RecaladaManage />
            </PrivateRoute>
            <PrivateRoute exact path="/recalada/edit/:id">
              <RecaladaManage />
            </PrivateRoute>
          </MainLayout> */}
        </Switch>
      </Router>
    </ProvideAuth>
  );
}
