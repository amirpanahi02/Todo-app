import { FC } from "react";
import style from "./button.module.css";

interface Props {
  title?: string;
  onClick: () => void;
}

const Button: FC<Props> = ({ title = "submit", onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
