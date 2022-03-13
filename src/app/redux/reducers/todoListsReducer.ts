import {
  ActionTypes,
  ADD_TODO,
  ADD_TODO_LIST,
  DELETE_TODO,
  DELETE_TODO_LIST,
  EDIT_LIST_TITLE,
  EDIT_TODO_TEXT,
  MOVE_TODO,
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

const editListTitle = (
  todoLists: TodoList[],
  payload: { text: string; listId: number }
): TodoList[] =>
  todoLists.map((todoList) => {
    if (todoList.id !== payload.listId) return todoList;
    return {
      ...todoList,
      name: payload.text,
    };
  });

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

const editTodoText = (
  todoLists: TodoList[],
  payload: { text: string; listId: number; todoId: number }
): TodoList[] =>
  todoLists.map((todoList) => {
    if (todoList.id !== payload.listId) return todoList;
    return {
      ...todoList,
      todos: todoList.todos.map((todo) => {
        if (todo.id !== payload.todoId) return todo;
        return {
          ...todo,
          text: payload.text,
        };
      }),
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

const moveTodo = (
  todoLists: TodoList[],
  payload: {
    targetListId: number;
    todoId: number;
    listId: number;
    text: string;
  }
): TodoList[] => {
  const newTodoLists = deleteTodo(todoLists, {
    todoId: payload.todoId,
    listId: payload.listId,
  });
  return addTodoToLists(newTodoLists, {
    text: payload.text,
    listId: payload.targetListId,
  });
};

const todoListsReducer = (
  state: Store = {
    todoLists: [
      { name: "Todos", id: 0, todos: [] },
      { name: "Doing", id: 1, todos: [] },
      { name: "Done", id: 2, todos: [] },
    ],
  },
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

    case MOVE_TODO:
      return {
        ...state,
        todoLists: moveTodo(state.todoLists, action.payload),
      };
    case EDIT_LIST_TITLE:
      return {
        ...state,
        todoLists: editListTitle(state.todoLists, action.payload),
      };

    case EDIT_TODO_TEXT:
      return {
        ...state,
        todoLists: editTodoText(state.todoLists, action.payload),
      };

    default:
      return state;
  }
};
export default todoListsReducer;
