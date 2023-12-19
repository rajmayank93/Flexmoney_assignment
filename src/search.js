// frontend/src/components/SearchComponent.js

import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

const SearchComponent = ({ onSearch }) => {
  const [searchName, setSearchName] = useState("");
  const [newBatch, setnewBatch] = useState("6-7AM");
  const handleInputChange = (e) => {
    setSearchName(e.target.value);
  };
  const handleBatchChange = (e) => {
    setnewBatch(e.target.value);
  };

  const handleSearch = async () => {
    const obj = {
      email: searchName,
      batch: newBatch,
    };
    console.log(obj);
    console.log(JSON.stringify(obj));

    try {
      const response = await fetch("http://localhost:4000/search", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      const responseBody = await response.json();

      console.log(responseBody);

      if (response.status === 200) {
        alert("Users Batch Updated successfully!!");
      } else {
        alert("You are choosing the same batch!! Pick Different!");
      }
    } catch (error) {
      console.error("Error during fetch:", error.message);
      alert("An error occurred during the request. Please try again.");
    }
  };

  return (
    <div>
      <label>
        Search Enrolled person Name:
        <input type="text" value={searchName} onChange={handleInputChange} />
      </label>
      <label>
        Batch:
        <select name="batch" value={newBatch} onChange={handleBatchChange}>
          <option value="6-7AM">6-7AM</option>
          <option value="7-8AM">7-8AM</option>
          <option value="8-9AM">8-9AM</option>
          <option value="5-6PM">5-6PM</option>
        </select>
      </label>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchComponent;
