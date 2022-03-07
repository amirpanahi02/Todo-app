import { combineReducers } from "redux";
import todoListsReducer from "./todoListsReducer";

const reducers = combineReducers({
  lists: todoListsReducer,
});

export default reducers;
