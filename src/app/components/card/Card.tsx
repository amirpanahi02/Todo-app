import { ChangeEventHandler, FC, useState } from "react";
import { mdiDeleteForever } from "@mdi/js";
import Icon from "@mdi/react";

import { Todo } from "../../redux/types";
import style from "./card.module.css";
import TodoCard from "../todoCard/TodoCard";
import AddTodo from "./../addTodo/AddTodo";
import Confirm from "../confirm/Confirm";
import { useDispatch } from "react-redux";
import { deleteTodoList, editListTitle } from "../../redux/actions";

interface Props {
  title: string;
  todos: Todo[];
  id: number;
}

const Card: FC<Props> = ({ title, todos, id }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dispatch = useDispatch();

  const onYes = () => {
    dispatch(deleteTodoList(id));
  };
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(editListTitle({ text: e.target.value, listId: id }));
  };
  const onKeyUp = (e:React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.keyCode === 13){(e.target as HTMLInputElement).blur()}
  }
  return (
    <div className={style.container}>
      <div className={style.header}>
        <input  className={style.input} value={title} onChange={onChange}  onKeyUp={onKeyUp} />
        <div className={style.icon} onClick={() => setShowDeleteModal(true)}>
          <Icon path={mdiDeleteForever} size={1} />
        </div>
      </div>
      {todos.map(({ id, text, todoListId }: Todo) => (
        <div key={id} className="mb-small">
          <TodoCard todoId={id} text={text} listId={todoListId} />
        </div>
      ))}
      <AddTodo listId={id} />
      <Confirm
        visible={showDeleteModal}
        title="Are you sure you want to delete this list?"
        onYes={onYes}
        onNo={() => setShowDeleteModal(false)}
      />
    </div>
  );
};

export default Card;
