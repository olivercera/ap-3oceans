import React, { Component } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useAuth } from './../Auth.js';

import Sidebar from '../components/Sidebar.js';
import Recalada from '../components/Recalada/Recalada.js';
import Home from '../components/Home/Home.js';
import RecaladaManage from '../components/Recalada/RecaladaManage.js';



import './Main.css';

const styles = {
  paperContainer: {
      height: 700,
      backgroundImage: `url(${"/img/fondo.png"})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
     backgroundPosition: 'center',
  
  }
};

export default class MainLayout extends Component {
  //let history = useHistory();
  // let auth = useAuth();
  
    render() {
    return (
      <div style={styles.paperContainer}>
        <div className="is-flex is-flex-direction-row is-justify-content-space-between header-home">
          <div >
            <img src="./img/logo.png" alt="" className="img-header" />
          </div>
          <div className="is-flex is-flex-direction-row is-align-items-center is-justify-content-center">
            <p className="mr-4">Name user</p>
            <figure className="image is-48x48">
              <img className="is-rounded" src="./img/user.png" />
            </figure>
          </div>
        </div>

        <div className="columns body-home is-align-items-center mt-6">
          <div className="column is-2">
            <Sidebar />
            {this.props.children}
          </div>
          <div className="column">
            <Home/>
          </div>
        </div>
      </div>
    );
  }
}
