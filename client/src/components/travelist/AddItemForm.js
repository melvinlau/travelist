import React, { useState } from "react";

function AddItemForm({ category, add }) {

  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  }

  const handleSubmit = async () => {
    if (value === '') return alert('You cannot add a blank item');
    await add(value, category);
    setValue('');
  }

  return (
    <div>
      <button
        className="add-item-button float-right"
        onClick={handleSubmit}
      >
        Add
      </button>
      <input
        type="text"
        placeholder="Add an item"
        className="add-item-textinput"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default AddItemForm;
