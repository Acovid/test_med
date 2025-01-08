import React, { useState } from 'react';

const AddItemsToState = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
  ]);

  const addItem = () => {
    const newItem = { id: items.length + 1, name: `Item ${items.length + 1}` };
    setItems((prevItems) => [...prevItems, newItem]); // Spread the old array and add the new item
  };

  
  

  return (
    <div style={{marginTop: "150px"}}>
      <h1>Items List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
        {console.log(JSON.stringify(items))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default AddItemsToState;