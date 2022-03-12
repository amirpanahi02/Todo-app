import { FC, useState } from "react";
import Icon from "@mdi/react";
import { mdiPencilOutline } from "@mdi/js";

import style from "./todoCard.module.css";
import Confirm from "../confirm/Confirm";
import ModalListItem from "../modalListItem/ModalListItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, moveTodo } from "../../redux/actions";
import Modal from "../modal/Modal";
import { RootState } from "../../redux/store";

interface Props {
  text: string;
  listId: number;
  todoId: number;
}

const TodoCard: FC<Props> = ({ text, todoId, listId }) => {
  const [editVisible, setEditVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [moveVisible, setMoveVisible] = useState(false);

  const lists = useSelector((state: RootState) => state.lists.todoLists);

  const dispatch = useDispatch();

  const onYes = () => {
    dispatch(deleteTodo({ todoId, listId }));
  };
  const onDelete = () => {
    setEditVisible(false);
    setDeleteVisible(true);
  };
  const onMove = () => {
    setEditVisible(false);
    setMoveVisible(true);
  };

  const onMoveTodo = (
    targetListId: number,
    todoId: number,
    listId: number,
    text: string
  ): void => {
    dispatch(moveTodo({ targetListId, todoId, listId, text }));
    setMoveVisible(false);
  };

  return (
    <div className={style.container}>
      <input className={style.input} value={text} />
      <div
        className={style.icon}
        onClick={() => {
          setEditVisible(true);
        }}
      >
        <Icon path={mdiPencilOutline} size={0.7} />
      </div>
      <Modal
        title="List actions"
        onClose={() => setEditVisible(false)}
        visible={editVisible}
      >
        <ModalListItem title="move" chevron onClick={onMove} />
        <ModalListItem title="delete" onClick={onDelete} />
      </Modal>
      <Confirm
        title="Are you sure you want to delete this card?"
        visible={deleteVisible}
        onNo={() => setDeleteVisible(false)}
        onYes={onYes}
      />
      <Modal
        visible={moveVisible}
        title="Move Card"
        onClose={() => setMoveVisible(false)}
      >
        {lists.map((list) => {
          if (list.id === listId) return null;
          return (
            <ModalListItem
              title={list.name}
              onClick={() => onMoveTodo(list.id, todoId, listId, text)}
            />
          );
        })}
      </Modal>
    </div>
  );
};

export default TodoCard;
