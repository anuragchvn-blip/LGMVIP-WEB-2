// UserGrid.js

import React from "react";
import "./UserGrid.css"; // Import your custom CSS file

const UserGrid = ({ users }) => {
  return (
    <div className="user-grid">
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <img src={user.avatar} alt={user.first_name} />
          <h3>{`${user.first_name} ${user.last_name}`}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserGrid;
