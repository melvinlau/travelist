import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';

import Start from './components/Start';
import ActivityList from './components/ActivityList';
import PackingList from './components/PackingList';

function App() {
  const [trip, updateTrip] = useState({});

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Travelist</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Router>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/activities">
                <ActivityList
                  trip={trip}
                  updateTrip={updateTrip}
                />
              </Route>
              <Route path="/travelist">
                <PackingList
                  trip={trip}
                  updateTrip={updateTrip}
                />
              </Route>
              <Route path="/">
                <Start
                  trip={trip}
                  updateTrip={updateTrip}
                />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
