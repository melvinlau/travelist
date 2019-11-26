import React, { Component } from "react";
import axios from 'axios';

import StartView from './components/start-view';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <StartView />
      </div>
    );
  }
}

export default App;
