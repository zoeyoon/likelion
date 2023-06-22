import "./App.css";
import React, { useState, useEffect } from "react";
import { getUsers } from "./Api.js";
import User from "./Users";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className="container">
      <h1 className="title">List of Users</h1>
      <div className="users">
        {users.map((user) => (
          <User
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
          />
        ))}
      </div>
    </section>
  );
}

export default App;
