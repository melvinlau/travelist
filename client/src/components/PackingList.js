import React, { useState } from "react";
import PackingListItem from './PackingListItem';

function PackingList({ trip, updateTrip }) {

  const [items, updateItems] = useState(['shirts', 'socks', 'shoes', 'trousers']);

  const [completedItems, updateCompletedItems] = useState([]);

  const complete = (item) => {
    updateCompletedItems([...completedItems, item]);
  }

  const unComplete = (index) => {
    const newCompletedItems = [...completedItems];
    newCompletedItems.splice(index, 1);
    updateCompletedItems(newCompletedItems);
  }

  const addItem = (item) => {
    updateItems([...items, item])
  }

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    updateItems(newItems);
  }

  return (
    <div>
      {
        items.map((item, index) => {
          return (
            <PackingListItem
              key={index}
              id={index}
              name={item}
              complete={complete}
              unComplete={unComplete}
              addItem={addItem}
              deleteItem={deleteItem}
            />
          );
        })
      }
      <button>
        Save
      </button>
    </div>
  );
}

export default PackingList;
