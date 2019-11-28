import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Start from './components/Start';
import ActivityList from './components/ActivityList';
import PackingList from './components/PackingList';

function App() {
  const [destination, setDestination] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [dateFrom, setDateFrom] = useState('');

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
                <ActivityList destination={destination} dateTo={dateTo} dateFrom={dateFrom}/>
              </Route>
              <Route path="/travelist">
                <PackingList />
              </Route>
              <Route path="/">
                <Start setDestination={setDestination} setDateTo={setDateTo} setDateFrom={setDateFrom} />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
