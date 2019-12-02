import React, { useState, useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import axios from "axios";

import Start from "./components/start/Start";
import ActivityList from "./components/activities/ActivityList";
import PackingList from "./components/travelist/PackingList";
import SignUp from "./components/user/SignUp";
import Trips from "./components/trips/Trips";
import Navbar from "./components/shared/components/Navigation/Navbar";
import Auth from "./components/user/Auth";
import { AuthContext } from "./components/shared/context/auth-context";

function App() {
  const [trip, updateTrip] = useState({});
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
  }, []);

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Start trip={trip} updateTrip={updateTrip} />
        </Route>
        <Route path="/activities" exact>
          <ActivityList trip={trip} updateTrip={updateTrip} />
        </Route>
        <Route path="/travelist" exact>
          <PackingList trip={trip} updateTrip={updateTrip} />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout
      }}
    >
      <Router>
        <Navbar />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
