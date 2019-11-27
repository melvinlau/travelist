import React, { Component } from "react";
import axios from "axios";


import StartView from './components/start-view';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="container p-4">

        <div id="header" className="row">
          <div className="col-12">
            <h1>Travelist</h1>
          </div>
        </div>

        <div id="main-content" className="row">
          <div className="col-12">
            <StartView />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
