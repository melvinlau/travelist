import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PackingListItem from './PackingListItem';

function PackingList({ trip, updateTrip }) {

  const [items, updateItems] = useState([
    'shirts', 'socks', 'shoes', 'trousers'
  ]);

  return (
    <div>
      {
        items.map((item) => {
          return <PackingListItem name={item} />
        })
      }

    </div>
  );
}

export default PackingList;
