import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  FILTER_TODO,
  TOGGLE_TODO,
} from "../Types/TodoTypes";
export const addTodoAction = (data) => {
  return {
    type: ADD_TODO,
    data: data,
  };
};
export const deleteTodoAction = (data) => {
  return {
    type: DELETE_TODO,
    data: data,
  };
};

export const toggleTodoAction = (data) => {
  return {
    type: TOGGLE_TODO,
    data: data,
  };
}

export const editTodoAction = (data) => {
  return {
    type: EDIT_TODO,
    data: data,
  };
};



export const filterTodoAction = (data) => {
  return {
    type: FILTER_TODO,
    data: data,
  };
}