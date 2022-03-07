export const ADD_TODO_LIST = "ADD_TODO_LIST";
export const DELETE_TODO_LIST = "DELETE";

export type ActionTypes =
  | { type: typeof ADD_TODO_LIST; payload: string }
  | { type: typeof DELETE_TODO_LIST; payload: number };
