import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TripCard from "./TripCard";
import TripsListHeader from "./TripsListHeader";

import { AuthContext } from "../shared/context/auth-context";

function TripsListNew() {
  const auth = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <TripsListHeader />
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center flex-column">
            <TripCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TripsListNew;
