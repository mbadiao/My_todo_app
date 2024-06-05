import React from "react";
import Addtask from "./components/Addtask";
import ListTask from "./components/ListTask";
function App() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Todo App</h1>
      <Addtask />
      <ListTask />
    </>
  );
}

export default App;
