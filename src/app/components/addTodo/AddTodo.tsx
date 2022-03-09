import { FC, useEffect, useRef, useState } from "react";
import style from "./addTodo.module.css";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import classnames from "classnames";
import { mdiClose } from "@mdi/js";

import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions";

interface Props {
  listId: number;
}

const AddTodo: FC<Props> = ({ listId }) => {
  const dispatch = useDispatch();
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [showInput]);

  const submitList = () => {
    if (inputRef.current?.value) {
      dispatch(addTodo({ text: inputRef.current.value, listId }));
      setShowInput(false);
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <div className={classnames(style.input_container, { hide: !showInput })}>
        <textarea
          placeholder="Enter a title for this card…"
          ref={inputRef}
          className={style.input}
        />
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
        className={classnames(style.add_button, { hide: showInput })}
      >
        <Icon path={mdiPlus} size={1} />
        <p>Add a card</p>
      </div>
    </>
  );
};

export default AddTodo;
