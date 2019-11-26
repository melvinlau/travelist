import React, { Component } from "react";
import axios from 'axios';

import StartView from './components/start-view';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="container p-4">

        <div className="header row">
          <div className="col-12">
            <h1>Travelist</h1>
          </div>
        </div>

        <div className="main-content row">
          <div className="col-12">
            <StartView />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
