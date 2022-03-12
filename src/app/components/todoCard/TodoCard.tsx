import { FC, useState } from "react";
import Icon from "@mdi/react";
import { mdiPencilOutline } from "@mdi/js";
import { mdiClose } from "@mdi/js";

import style from "./todoCard.module.css";
import classNames from "classnames";
import Confirm from "../confirm/Confirm";
import ModalListItem from "../modalListItem/ModalListItem";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/actions";
import Modal from "../modal/Modal";

interface Props {
  text: string;
  listId: number;
  todoId: number;
}

const TodoCard: FC<Props> = ({ text, todoId, listId }) => {
  const [editVisible, setEditVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const dispatch = useDispatch();

  const onYes = () => {
    dispatch(deleteTodo({ todoId, listId }));
  };
  const onDelete = () => {
    setEditVisible(false);
    setDeleteVisible(true);
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
        <ModalListItem
          title="move"
          chevron
          onClick={() => console.log("first")}
        />
        <ModalListItem title="delete" onClick={onDelete} />
      </Modal>

      <Confirm
        title="Are you sure you want to delete this card?"
        visible={deleteVisible}
        onNo={() => setDeleteVisible(false)}
        onYes={onYes}
      />
    </div>
  );
};

export default TodoCard;
