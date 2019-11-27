import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PackingListItem from './PackingListItem';

function PackingList() {
  return (
    <div>
      <PackingListItem />
    </div>
  );
}

export default PackingList;
