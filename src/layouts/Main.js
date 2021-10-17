import React, { Component } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useAuth } from './../Auth.js';

import Sidebar from '../components/Sidebar.js';

export default class MainLayout extends Component {
  //let history = useHistory();
  // let auth = useAuth();
  render() {
    return (
      <div>
        <Sidebar />
        {this.props.children}
      </div>
    );
  }
}
