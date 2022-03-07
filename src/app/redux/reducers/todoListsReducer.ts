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

const todoListsReducer = (
  state: Store = { todoLists: [{ name: "hellowww", id: 1, todos: [] }] },
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
