export const ADD_TODO_LIST = "ADD_TODO_LIST";
export const DELETE_TODO_LIST = "DELETE";
export const ADD_TODO = "ADD_TODO";

export type ActionTypes =
  | { type: typeof ADD_TODO_LIST; payload: string }
  | { type: typeof DELETE_TODO_LIST; payload: number }
  | { type: typeof ADD_TODO; payload: { text: string; listId: number } };

export const addTodoList = (payload: string) => ({
  type: ADD_TODO_LIST,
  payload,
});
export const addTodo = (payload: { text: string; listId: number }) => ({
  type: ADD_TODO,
  payload,
});
