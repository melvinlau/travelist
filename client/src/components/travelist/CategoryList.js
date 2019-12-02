import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PackingListItem from './PackingListItem';

function CategoryList({ category, items, complete, unComplete, remove }) {
  const filteredItems = () => {
    return items.filter(element => element.category === category)
  }
  return (
    <div>{category.charAt(0).toUpperCase() + category.slice(1)}
      {filteredItems().map((item) => {
        return (
          <PackingListItem
            key={item.name}
            item={item}
            complete={complete}
            unComplete={unComplete}
            remove={remove}
          />
        )
      })}
    </div>
  );
}

export default CategoryList;