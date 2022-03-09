import { FC, useState } from "react";
import style from "./addTodo.module.css";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";

interface Props {}

const AddTodo: FC<Props> = () => {
  const [showInput, setShowInput] = useState(false);

  return showInput ? (
    <h1>hi</h1>
  ) : (
    <div
      onClick={() => {
        setShowInput(true);
      }}
      className={style.addButton}
    >
      <Icon path={mdiPlus} size={1} />
      <p>Add a card</p>
    </div>
  );
};

export default AddTodo;
