import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../Redux/Actions/TodoActions";

const Addtask = () => {
  const [name, setName] = useState();
  const [error, setError] = useState();
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center gap-2 m-4">
      <div>
        <input
        type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Add a task ..."
          className="input input-bordered input-primary  max-w-xs w-[60vw]"
        />
      {error && <p className="text-red-500 text-center">{error}</p>}
      </div>
      <button
        class="btn btn-info"
        onClick={() => {
          if (!name) {
            setError("Please enter a task");
            return;
          }
          const todo = { id: Math.random(), name: name, isDone: "in progress"};
          dispatch(addTodoAction(todo));
          setName("");
        }}
      >
        Addtask
      </button>
      </div>
  );
};

export default Addtask;
