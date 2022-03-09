import { FC, useEffect, useRef, useState } from "react";
import style from "./addList.module.css";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import { mdiClose } from "@mdi/js";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { addTodoList } from "../../redux/actions";
import classnames from "classnames";

interface Props {}

const AddList: FC<Props> = () => {
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    if (showInput) inputRef.current?.focus();
  }, [showInput]);

  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const submitList = () => {
    if (inputRef.current?.value) {
      dispatch(addTodoList(inputRef.current.value));
      setShowInput(false);
      inputRef.current.value = "";
    }
  };

  const inputClass = classnames(style.input_container, { hide: !showInput });
  const containerClass = classnames(style.container, { hide: showInput });

  return (
    <>
      <div className={inputClass}>
        <input type="text" ref={inputRef} className={style.input} />
        <div className={style.buttons}>
          <div className="mr-small">
            <Button title="Add list" onClick={submitList} />
          </div>
          <div
            className="center"
            onClick={() => {
              setShowInput(false);
            }}
          >
            <Icon path={mdiClose} size={1} />
          </div>
        </div>
      </div>

      <div
        onClick={() => {
          setShowInput(true);
        }}
        className={containerClass}
      >
        <Icon path={mdiPlus} size={1} />
        <p>Add another list</p>
      </div>
    </>
  );
};

export default AddList;
