import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import AddList from "../addList/AddList";
import style from "./cards.module.css";

const CardsContainer: FC = () => {
  const lists = useSelector((state: RootState) => state.lists.todoLists);

  return (
    <div className={style.container}>
      {lists.map((list) => (
        <h1 key={list.id}>{list.name}</h1>
      ))}
      <AddList onClick={() => console.log("hello")} />
    </div>
  );
};

export default CardsContainer;
