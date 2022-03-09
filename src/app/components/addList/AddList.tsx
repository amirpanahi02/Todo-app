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

  return (
    <>
      <div className={classnames(style.input_container, { hide: !showInput })}>
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
        className={classnames(style.add_list_button, { hide: showInput })}
      >
        <Icon path={mdiPlus} size={1} />
        <p>Add another list</p>
      </div>
    </>
  );
};

export default AddList;
