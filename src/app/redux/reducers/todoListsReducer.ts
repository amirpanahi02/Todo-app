import {
  ActionTypes,
  ADD_TODO,
  ADD_TODO_LIST,
  DELETE_TODO,
  DELETE_TODO_LIST,
} from "../actions";
import { Store, TodoList } from "./../types";

const addTodoList = (todoLists: TodoList[], text: string): TodoList[] => [
  ...todoLists,
  {
    todos: [],
    name: text,
    id: Math.max(0, Math.max(...todoLists.map(({ id }) => id))) + 1,
  },
];
const deleteTodoList = (todoLists: TodoList[], id: number): TodoList[] => {
  return todoLists.filter((tl) => tl.id !== id);
};

const addTodoToLists = (
  todoLists: TodoList[],
  payload: { text: string; listId: number }
): TodoList[] =>
  todoLists.map((todoList) => {
    if (todoList.id !== payload.listId) return todoList;

    return {
      ...todoList,
      todos: [
        ...todoList.todos,
        {
          text: payload.text,
          todoListId: todoList.id,
          id: Math.max(0, Math.max(...todoList.todos.map(({ id }) => id))) + 1,
        },
      ],
    };
  });

const deleteTodo = (
  todoLists: TodoList[],
  payload: { todoId: number; listId: number }
): TodoList[] =>
  todoLists.map((todoList) => {
    if (todoList.id !== payload.listId) return todoList;
    return {
      ...todoList,
      todos: todoList.todos.filter((todo) => todo.id !== payload.todoId),
    };
  });

const todoListsReducer = (
  state: Store = { todoLists: [] },
  action: ActionTypes
) => {
  switch (action.type) {
    case ADD_TODO_LIST:
      return {
        ...state,
        todoLists: addTodoList(state.todoLists, action.payload),
      };
    case DELETE_TODO_LIST:
      return {
        ...state,
        todoLists: deleteTodoList(state.todoLists, action.payload),
      };

    case ADD_TODO:
      return {
        ...state,
        todoLists: addTodoToLists(state.todoLists, action.payload),
      };
    case DELETE_TODO:
      return {
        ...state,
        todoLists: deleteTodo(state.todoLists, action.payload),
      };

    default:
      return state;
  }
};
export default todoListsReducer;
