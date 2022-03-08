import { FC } from "react";
import { mdiDotsHorizontal } from "@mdi/js";
import Icon from "@mdi/react";

import { Todo } from "../../redux/types";
import style from "./card.module.css";
import TodoCard from "../todoCard/TodoCard";
import AddTodo from "./../addTodo/AddTodo";

interface Props {
  title: string;
  todos: Todo[];
}

const Card: FC<Props> = ({ title, todos }) => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <input className={style.input} value={title} />
        <div className={style.icon}>
          <Icon path={mdiDotsHorizontal} size={1} />
        </div>
      </div>
      {todos.map(({ id, text, todoListId }: Todo) => (
        <div className="mb-small">
          <TodoCard key={id} id={id} text={text} ListId={todoListId} />
        </div>
      ))}
      <AddTodo />
    </div>
  );
};

export default Card;
