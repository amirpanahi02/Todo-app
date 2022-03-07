import { FC } from "react";
import style from "./addList.module.css";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";

interface Props {
  onClick: () => void;
}

const AddList: FC<Props> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={style.container}>
      <Icon path={mdiPlus} size={1} />
      <p>Add another list</p>
    </div>
  );
};

export default AddList;
