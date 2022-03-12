export const ADD_TODO_LIST = "ADD_TODO_LIST";
export const DELETE_TODO_LIST = "DELETE_TODO_LIST";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const MOVE_TODO = "MOVE_TODO";

export type ActionTypes =
  | { type: typeof ADD_TODO_LIST; payload: string }
  | { type: typeof DELETE_TODO_LIST; payload: number }
  | { type: typeof ADD_TODO; payload: { text: string; listId: number } }
  | { type: typeof DELETE_TODO; payload: { todoId: number; listId: number } }
  | {
      type: typeof MOVE_TODO;
      payload: {
        targetListId: number;
        todoId: number;
        listId: number;
        text: string;
      };
    };

export const addTodoList = (payload: string) => ({
  type: ADD_TODO_LIST,
  payload,
});
export const addTodo = (payload: { text: string; listId: number }) => ({
  type: ADD_TODO,
  payload,
});

export const deleteTodoList = (payload: number) => ({
  type: DELETE_TODO_LIST,
  payload,
});

export const deleteTodo = (payload: { todoId: number; listId: number }) => ({
  type: DELETE_TODO,
  payload,
});

export const moveTodo = (payload: {
  targetListId: number;
  todoId: number;
  listId: number;
  text: string;
}) => ({
  type: MOVE_TODO,
  payload,
});
