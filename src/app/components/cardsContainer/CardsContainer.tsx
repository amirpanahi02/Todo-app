import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import AddList from "../addList/AddList";
import Card from "../card/Card";
import style from "./cards.module.css";

const CardsContainer: FC = () => {
  const lists = useSelector((state: RootState) => state.lists.todoLists);

  return (
    <div className={style.container}>
      {lists.map(({ id, name, todos }) => (
        <div key={id} className="ml-medium">
          <Card title={name} todos={todos} id={id} />
        </div>
      ))}
      <div className="ml-medium">
        <AddList />
      </div>
    </div>
  );
};

export default CardsContainer;
