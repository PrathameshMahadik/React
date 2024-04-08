/* 7.Design a search filter component that consists of an input field. 
As the user types into the input, use controlled components to filter a list of items displayed below. 
The list should dynamically update to show only items matching the search query. */
import React, { useState } from "react";

const Task7 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const items = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes"];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Task-7</h1>
      <h2>Search Filter</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task7;
