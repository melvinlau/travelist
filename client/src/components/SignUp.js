import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import Countdown from "./Countdown";

function SignUp({ trip }) {
  return (
    <div>
      <h3>Sign up to save your Travelist!</h3>
      <SignUpForm />
      <Countdown trip={trip} />
    </div>
  );
}

export default SignUp;
