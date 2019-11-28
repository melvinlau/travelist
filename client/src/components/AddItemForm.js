import React, { useState } from "react";

function AddItemForm({ addItem }) {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  }

  const handleSubmit = () => {
    addItem(value);
    setValue('');
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Add an item"
        value={value}
        onChange={handleChange}
      /> <br />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default AddItemForm;
