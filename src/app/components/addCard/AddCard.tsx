import { FC } from "react";
import style from "./addCard.module.css";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";

const AddCard: FC = () => {
  return (
    <div className={style.container}>
      <Icon path={mdiPlus} size={1} />
      <h2>Add a card</h2>
    </div>
  );
};

export default AddCard;
