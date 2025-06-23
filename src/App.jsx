import React from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="container">
      <h1>GoREST User Manager</h1>
      <UserForm />
      <hr />
      <UserList />
    </div>
  );
}

export default App;
