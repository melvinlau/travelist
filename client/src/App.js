import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import axios from "axios";

import Start from "./components/start/Start";
import StartNew from "./components/new/StartNew";
import TripsListNew from "./components/new/TripsListNew";
import PackingNew from "./components/new/PackingNew";
import ActivityList from "./components/activities/ActivityList";
import PackingList from "./components/travelist/PackingList";
import Trips from "./components/trips/Trips";
import Auth from "./components/user/Auth";
import Navbar from "./components/shared/components/Navbar";
import Footer from "./components/shared/components/Footer";
import { AuthContext } from "./components/shared/context/auth-context";

function App() {
  const [userId, setUserId] = useState(false);
  const [name, setName] = useState(false);
  const [token, setToken] = useState(false);
  const [trip, updateTrip] = useState({});
  const [tripList, updateTripList] = useState([]);

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
    updateTrip(null);
    updateTripList(null);
    localStorage.removeItem("userData");
  }, []);

  const loadTrip = useCallback(trip => {
    updateTrip(trip);
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
      <React.Fragment>
        <Route exact path="/trips" component={Trips} />
      </React.Fragment>
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
      <Navbar />

      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6">
            <Router>
              <Switch>
                <Route exact path="/" component={Start} />
                <Route exact path="/activities" component={ActivityList} />
                <Route exact path="/packinglist" component={PackingList} />
                <Route exact path="/auth" component={Auth} />
                <Route path="/trips-list" exact>
                  <TripsListNew />
                </Route>
                <Route path="/start-new" exact>
                  <StartNew />
                </Route>
                <Route path="/packing-new" exact>
                  <PackingNew />
                </Route>

                {routes}
              </Switch>
            </Router>

          </div>
        </div>
      </div>

      <Footer />

    </AuthContext.Provider>
  );
}

export default App;
