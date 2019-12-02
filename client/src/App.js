import React, { useState, useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import axios from "axios";

import Start           from "./components/start/Start";
import ActivityList    from "./components/activities/ActivityList";
import PackingList     from "./components/travelist/PackingList";
import SignUp          from "./components/user/SignUp";
import Trips           from "./components/trips/Trips";

import Auth            from "./components/user/Auth";
import { AuthContext } from "./components/shared/context/auth-context";

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
        <Route path="/user/new-trip" exact>
          <Start trip={trip} updateTrip={updateTrip} />
        </Route>
        <Route path="/user/activities" exact>
          <ActivityList trip={trip} updateTrip={updateTrip} />
        </Route>
        <Route path="/user/travelist" exact>
          <PackingList trip={trip} updateTrip={updateTrip} />
        </Route>
        <Route path="/" exact>
          <Trips trip={trip} updateTrip={updateTrip} />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/auth" exact>
          <Auth trip={trip} updateTrip={updateTrip} />
        </Route>
        <Route path="/activities" exact>
          <ActivityList trip={trip} updateTrip={updateTrip} />
        </Route>
        <Route path="/travelist" exact>
          <PackingList trip={trip} updateTrip={updateTrip} />
        </Route>
        <Route path="/" exact>
          <Start trip={trip} updateTrip={updateTrip} />
        </Route>
        <Redirect to="/auth" exact/>
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
      <Router>
        {routes}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
