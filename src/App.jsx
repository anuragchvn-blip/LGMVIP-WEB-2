// App.js

import React, { useState } from "react";
import "./App.css"; // Import your custom CSS file
import UserGrid from "./UserGrid";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <span className="brand">Your Brand</span>
        <button className="btn" onClick={getUsers}>
          Get Users
        </button>
      </nav>
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <UserGrid users={users} />
      )}
    </div>
  );
}

export default App;
