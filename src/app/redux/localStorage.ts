import { RootState } from "./store";

const STATE_KEY = "state";

export const loadState = () => {
  try {
    const state = localStorage.getItem(STATE_KEY);
    if (state === null) {
      return undefined;
    }
    return JSON.parse(state);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: RootState) => {
  try {
    const storageState = JSON.stringify(state);
    localStorage.setItem(STATE_KEY, storageState);
  } catch {
    // ignore write errors
  }
};
