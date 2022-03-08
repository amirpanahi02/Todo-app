import { FC } from "react";
import style from "./addTodo.module.css";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";

const AddTodo: FC = () => {
  return (
    <div className={style.container}>
      <Icon path={mdiPlus} size={1} />
      <p>Add a card</p>
    </div>
  );
};

export default AddTodo;
