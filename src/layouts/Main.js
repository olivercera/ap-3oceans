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
        <div class="is-flex is-flex-direction-row is-justify-content-space-between header-home">
          <div >
            <img src="./img/logo.png" alt="" class="img-header" />
          </div>
          <div class="is-flex is-flex-direction-row is-align-items-center is-justify-content-center">
            <p class="mr-4">Name user</p>
            <figure class="image is-48x48">
              <img class="is-rounded" src="./img/user.png" />
            </figure>
          </div>
        </div>

        <div class="columns body-home is-align-items-center mt-6">
          <div class="column is-2">
            <Sidebar />
            {this.props.children}
          </div>
          <div class="column">
            <Home/>
          </div>
        </div>
      </div>
    );
  }
}
