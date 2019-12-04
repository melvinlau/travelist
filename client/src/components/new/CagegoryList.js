import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PackingListItem from "./PackingListItem";
import AddItemForm from "./AddItemForm";

function CategoryList({ category, items, add, remove, complete, unComplete }) {
  const filteredItems = () => {
    return items.filter(element => element.category === category);
  };
  return (
    <div className="category mb-3">
      <h4>👕 {category.charAt(0).toUpperCase() + category.slice(1)}</h4>
      <div className="dropdown-divider"></div>
      {filteredItems().map(item => {
        return (
          <PackingListItem
            key={item.name}
            item={item}
            complete={complete}
            unComplete={unComplete}
            remove={remove}
          />
        );
      })}
      <AddItemForm category={category} add={add} />
    </div>
  );
}

export default CategoryList;
