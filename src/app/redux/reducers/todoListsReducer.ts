import { ActionTypes, ADD_TODO_LIST, DELETE_TODO_LIST } from "../actions";
import { Store, TodoList } from "./../types";

const addTodoList = (todoLists: TodoList[], text: string): TodoList[] => [
  ...todoLists,
  {
    todos: [],
    name: text,
    id: Math.max(0, Math.max(...todoLists.map(({ id }) => id))) + 1,
  },
];

const deleteTodoList = (todoLists: TodoList[], id: number): TodoList[] =>
  todoLists.filter((tl) => tl.id !== id);

const testState = [
  {
    name: "To Do",
    id: 1,
    todos: [{ text: "finish project", id: 1, todoListId: 1 }],
  },
  // { name: "Doing", id: 2, todos: [] },
  // { name: "Done", id: 3, todos: [] },
];

const todoListsReducer = (
  state: Store = { todoLists: testState },
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
        todolists: deleteTodoList(state.todoLists, action.payload),
      };

    default:
      return state;
  }
};
export default todoListsReducer;
