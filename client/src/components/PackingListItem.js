import React, { useState } from "react";

function PackingListItem() {
  return (
    <div className="packing-list-item">
      <input type="checkbox" /> &nbsp;
      <label className="packing-list-item-name">
        Packing list item
      </label>
    </div>
  );
}

export default PackingListItem;
