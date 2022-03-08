import { FC } from "react";
import Icon from "@mdi/react";
import { mdiPencilOutline } from "@mdi/js";

import style from "./todoCard.module.css";

interface Props {
  text: string;
  ListId: number;
  id: number;
}

const TodoCard: FC<Props> = ({ text, id, ListId }) => {
  return (
    <div className={style.container}>
      <input className={style.input} value={text} />
      <div className={style.icon}>
        <Icon path={mdiPencilOutline} size={0.7} />
      </div>
    </div>
  );
};

export default TodoCard;
