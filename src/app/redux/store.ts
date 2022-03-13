import { createStore } from "redux";
import { loadState, saveState } from "./localStorage";
import reducers from "./reducers";
import throttle from "lodash.throttle";

const devtools = // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const persistedState = loadState();

const store = createStore(reducers, persistedState, devtools);
export type RootState = ReturnType<typeof store.getState>;

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);
export default store;
