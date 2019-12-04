import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import StartFormNew from "./StartFormNew";

import { AuthContext } from "../shared/context/auth-context";

function StartNew() {
  const auth = useContext(AuthContext);

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center flex-column align-items-center pb-3">
            <img src="./images/char.png" style={{ width: "100px" }} />
            <h2>
              <strong>Where are you travelling next?</strong>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className="card" style={{ width: "24rem" }}>
              <div className="card-body">
                <StartFormNew />
              </div>
            </div>
          </div>
        </div>
        <div className="raw justify-content-center">
          <div className="col text-muted text-center small pt-5 pb-3">
            Made with ❤️ by Melvin, Zaira, Olly &amp; Brad
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartNew;
