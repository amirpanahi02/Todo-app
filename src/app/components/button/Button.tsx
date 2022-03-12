import { FC } from "react";
import style from "./button.module.css";

interface Props {
  title?: string;
  onClick: () => void;
  color?: string;
}

const Button: FC<Props> = ({ title = "submit", onClick, color }) => {
  return (
    <button
      className={style.button}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
