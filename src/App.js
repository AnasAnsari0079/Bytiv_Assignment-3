import React from "react";
import CardComponent from "./CardComponent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { users } from "./constants";

function App() {
  // Example array of user data
  return (
    <div className="App">
      <div className="card-container">
        {users.map((user, index) => (
          <CardComponent key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
