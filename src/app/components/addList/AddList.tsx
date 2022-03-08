import { FC } from "react";
import style from "./addList.module.css";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";

interface Props {}

const AddList: FC<Props> = () => {
  return (
    <div onClick={() => console.log("hello")} className={style.container}>
      <Icon path={mdiPlus} size={1} />
      <p>Add another list</p>
    </div>
  );
};

export default AddList;
