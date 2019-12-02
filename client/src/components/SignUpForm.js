import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function SignUpForm() {
  return (
    <div>
      <input
        name="email"
        data-cy="email"
        type="email"
        placeholder="Email"
        required
        autoFocus
      /> <br />
      <input
        name="password"
        data-cy="password"
        type="password"
        placeholder="Password"
        required
      /> <br />
      <input
        name="password-confirmation"
        data-cy="password-confirmation"
        type="password"
        placeholder="Confirm password"
        required
      /> <br />
      <button>
        Sign up
      </button>
    </div>
  );
}

export default SignUpForm;
