import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUpForm from './SignUpForm';

function SignUp() {
  return (
    <div>
      <h3>Sign up to save your Travelist!</h3>
      <SignUpForm />
    </div>
  );
}

export default SignUp;
