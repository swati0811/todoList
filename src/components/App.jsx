import React, { useState } from "react";

function App() {
  const [listItem, addToList] = useState("");
  const [items, saveItem] = useState([]);

  function changeItem(event) {
    const newValue = event.target.value;
    addToList(newValue);
  }

  function addItem() {
    saveItem((prevItem) => {
      return [...prevItem, listItem];
    });
    addToList("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changeItem} type="text" value={listItem} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoList) => (
            <li>{todoList}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
