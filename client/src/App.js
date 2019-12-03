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
import Trips from "./components/trips/Trips";
import Navbar from "./components/shared/components/Navigation/Navbar";
import Auth from "./components/user/Auth";
import { AuthContext } from "./components/shared/context/auth-context";

function App() {

  const [userId, setUserId] = useState(false);
  const [name, setName] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [name, setName] = useState(false);
  const [userId, setUserId] = useState(false);
  const [trip, updateTrip] = useState({});

  const login = useCallback((userId, name, token) => {
    setToken(token);
    setName(name);
    setUserId(userId);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: userId,
        name: name,
        token: token
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setName(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.token) {
      login(storedData.userId, storedData.name, storedData.token);
    }
  }, [login]);

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
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
        <Redirect to="/auth" exact />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        userId: userId,
        setUserId: setUserId,
        name: name,
        setName: setName,
        token: token,
        setToken: setToken,
        trip: trip,
        updateTrip: updateTrip,
        login: login,
        logout: logout
      }}
    >
      <NavBar />
      <Router>
        <Navbar />
        {routes}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
