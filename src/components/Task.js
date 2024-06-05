import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodoAction,
  toggleTodoAction,
  editTodoAction,
} from "../Redux/Actions/TodoActions";

const Task = ({ name, id, isDone }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [error, setError] = useState();
// on modifie le nom de la tache 
  const handleSave = () => {
    if (!editedName) {
      setError("Please enter a task");
      return;
    }
    dispatch(editTodoAction({ id, name: editedName }));
    setIsEditing(false);
  };

  return (
    <div key={id} className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="input input-bordered w-full"
            />
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="card-actions justify-end">
              <button onClick={handleSave} className="btn btn-primary">
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="btn btn-outline btn-error"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <p>{name}</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => {
                  dispatch(toggleTodoAction(id));
                }}
                className="btn btn-primary"
              >
                {isDone === "in progress" ? "Done" : "In Progress"}
              </button>
              <button
                onClick={() => setIsEditing(true)}
                className="btn btn-outline"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  dispatch(deleteTodoAction(id));
                }}
                className="btn btn-outline btn-error"
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Task;
