import React, { useState } from "react";

function PackingListItem({ name }) {
  return (
    <div className="packing-list-item">
      <input type="checkbox" /> &nbsp;
      <label className="packing-list-item-name">
        {name}
      </label> &nbsp; &nbsp;
      <button>Delete</button>
    </div>
  );
}

export default PackingListItem;
