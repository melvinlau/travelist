import React, { useState, useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import axios from "axios";

import Start from "./components/Start";
import ActivityList from "./components/ActivityList";
import PackingList from "./components/PackingList";
import SignUp from "./components/SignUp";
import Auth from "./user/pages/Auth";
import Trips from "./components/Trips";
import { AuthContext } from "./shared/context/auth-context";

function App() {
  const [trip, updateTrip] = useState({});

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/activities">
          <ActivityList trip={trip} updateTrip={updateTrip} />
        </Route>
        <Route path="/travelist">
          <PackingList trip={trip} updateTrip={updateTrip} />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  useEffect(() => {
    console.log('App: trip', trip);
    console.log('App: trip.items', trip.items);
  });

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-4">
            <div className="row">
              <div className="col-12 mt-4">
                <h1 className="logo">Travelist</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Router>
                  {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                  <Switch>
                    <Route path="/activities">
                      <ActivityList trip={trip} updateTrip={updateTrip} />
                    </Route>
                    <Route path="/travelist">
                      <PackingList trip={trip} updateTrip={updateTrip} />
                    </Route>
                    <Route path="/signup">
                      <SignUp />
                    </Route>
                    <Route path="/auth">
                      <Auth />
                    </Route>
                    <Route path="/trips">
                      <Trips />
                    </Route>
                    <Route path="/">
                      <Start trip={trip} updateTrip={updateTrip} />
                    </Route>
                  </Switch>
                </Router>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
