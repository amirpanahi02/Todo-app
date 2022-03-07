export interface Todo {
  id: number;
  text: string;
  todoListId: number;
}

export interface TodoList {
  todos: Todo[];
  id: number;
  name: string;
}

export interface Store {
  todoLists: TodoList[];
}
