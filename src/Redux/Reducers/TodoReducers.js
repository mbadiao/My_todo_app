import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO, FILTER_TODO } from "../Types/TodoTypes";

const initialState = {
  todos: [],
  filter: 'all',
};

// ont crée un reducer pour les todos
export const TodoReducers = (state = initialState, action) => {
  switch (action.type) {
    // on ajoute un todo
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.data] };
    case DELETE_TODO:
      // on supprime un todo
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.data),
      };
    case TOGGLE_TODO:
      // on change le status d'un todo
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.data
            ? { ...item, isDone: item.isDone === "in progress" ? "done" : "in progress" }
            : item
        ),
      };
    case EDIT_TODO:
      // on edite un todo
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.data.id ? { ...item, name: action.data.name } : item
        ),
      };
    case FILTER_TODO:
      // on filtre les todos
      return {
        ...state,
        filter: action.data,
      };
    default:
      return state;
  }
};
