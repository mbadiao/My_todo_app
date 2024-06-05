import React from "react";
import Task from "./Task";
import { useSelector, useDispatch } from "react-redux";
import { filterTodoAction } from "../Redux/Actions/TodoActions";

const ListTask = () => {
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.TodoReducers);
  // on regarder si le filtre est all ou done ou in progress
  const handleFilterChange = (e) => {
    dispatch(filterTodoAction(e.target.value));
  };
// on filtre les todos 
  const filteredTodos = todoData.todos.filter((item) => {
    if (todoData.filter === "all") return true;
    return item.isDone === todoData.filter;
  });

  return (
    <div>
      <div className="m-5">
        <select onChange={handleFilterChange}
            value={todoData.filter}
            className="select select-info w-full max-w-xs">
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="in progress">In Progress</option>
        </select>
      </div>
      {filteredTodos.map((item) => {
        return (
          <div 
          className="flex justify-center gap-2 m-4"
          key={item?.id}>
            <Task {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default ListTask;
