import React, { useState } from "react";
import PackingListItem from './PackingListItem';

function PackingList({ trip, updateTrip }) {

  // Temporarily hardcoded list
  const [items, updateItems] = useState([
    'shirts', 'socks', 'shoes', 'trousers'
  ]);

  const [completedItems, updateCompletedItems] = useState([]);

  // WHen a user deletes
  // When a user adds an item

  // const deleteItem = (item) => {
  //
  // }

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
