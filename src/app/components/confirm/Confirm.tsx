import { FC } from "react";
import classnames from "classnames";

import style from "./confirm.module.css";
import Button from "../button/Button";

interface Props {
  title: string;
  onYes: () => void;
  onNo: () => void;
  visible: boolean;
}

const Confirm: FC<Props> = ({ title, onYes, onNo, visible = false }) => {
  return (
    <div className={classnames(style.container, { hide: !visible })}>
      <span className={style.title}>{title}</span>
      <div className={style.buttons}>
        <Button title="yes" onClick={onYes} />
        <Button title="no" onClick={onNo} />
      </div>
    </div>
  );
};

export default Confirm;
