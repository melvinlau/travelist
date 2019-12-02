import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import CreateTrip from "./CreateTrip";

function SignUp() {
  return (
    <div>
      <h3>Sign up to save your Travelist!</h3>
      <SignUpForm />
      <CreateTrip />
    </div>
  );
}

export default SignUp;
