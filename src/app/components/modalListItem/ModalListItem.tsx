import React, { FC } from "react";
import { mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";

import style from "./modalListItem.module.css";

interface Props {
  title: string;
  chevron?: boolean;
  onClick: () => void;
}

const ModalListItem: FC<Props> = ({ title, chevron = false, onClick }) => {
  return (
    <div className={style.container} onClick={onClick}>
      <span className={style.title}>{title}</span>
      <div className={style.chevron}>
        {chevron && <Icon path={mdiChevronRight} size={1} />}
      </div>
    </div>
  );
};

export default ModalListItem;
