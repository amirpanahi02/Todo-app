import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import classNames from "classnames";
import { FC } from "react";

import style from "./modal.module.css";

interface Props {
  visible: boolean;
  onClose: () => void;
  title: string;
}

const Modal: FC<Props> = ({ visible, onClose, title, children }) => {
  return (
    <div className={classNames(style.container, { hide: !visible })}>
      <div className={style.modalHeading}>
        <span className={style.modalTitle}>{title}</span>
        <div className={style.close_icon} onClick={onClose}>
          <Icon path={mdiClose} size={1} />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Modal;
