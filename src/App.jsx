import React from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold m-2 text-center">GoREST Users</h1>
      <div className="min-h-screen bg-gray-100 flex items-start justify-center p-8">
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl h-[600px]">
          <UserForm />
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default App;
