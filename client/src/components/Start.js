import React, { useState } from "react";
import StartForm from './StartForm';

function Start({ setDestination }) {
  return (<StartForm setDestination={setDestination} />);
}

export default Start;
