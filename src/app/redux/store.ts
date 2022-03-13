import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { loadState, saveState } from "./localStorage";
import reducers from "./reducers";

const devtools = // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const persistedState = loadState();

const store = createStore(reducers, persistedState, devtools);
export type RootState = ReturnType<typeof store.getState>;

store.subscribe(() => {
  saveState(store.getState());
});
export default store;
