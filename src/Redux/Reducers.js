import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";

import {thunk} from "redux-thunk";

import { TodoReducers } from "./Reducers/TodoReducers";


const combinedReducers = combineReducers({

  TodoReducers: TodoReducers,

});
const middleware = applyMiddleware(thunk);
const store = createStore(combinedReducers, middleware);
export { store };