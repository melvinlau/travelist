import React, { useState } from "react";

function AddItemForm({ category, add }) {
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = async () => {
    if (value === "") return alert("You cannot add a blank item");
    await add(value, category);
    setValue("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add an item"
        value={value}
        onChange={handleChange}
        className="form-control mr-2"
        style={{ width: "87%" }}
      />
      <button onClick={handleSubmit} className="btn btn-secondary">
        Add
      </button>
    </div>
  );
}

export default AddItemForm;
