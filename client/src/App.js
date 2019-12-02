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
        <Route path="/">
          <Start trip={trip} updateTrip={updateTrip} />
        </Route>
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

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
