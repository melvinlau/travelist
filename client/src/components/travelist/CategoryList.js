import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PackingListItem from './PackingListItem';
import AddItemForm from './AddItemForm';

function CategoryList({ category, items, add, remove, complete, unComplete, completedItems }) {

  const filteredItems = () => {
    return items.filter(element => element.category === category)
  }

  const capitalize = word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <div className="card">
      <div className="card-header category-header">
        {capitalize(category)}
      </div>
      <ul className="list-group list-group-flush">
        {
          filteredItems().map((item) => {
            return (
              <li className="list-group-item">
                <PackingListItem
                  key={item.name}
                  item={item}
                  complete={complete}
                  unComplete={unComplete}
                  remove={remove}
                  completedItems={completedItems}
                />
              </li>
            );
          })
        }
        <li className="list-group-item">
          <AddItemForm category={category} add={add} />
        </li>
      </ul>
    </div>
  );
}

export default CategoryList;
