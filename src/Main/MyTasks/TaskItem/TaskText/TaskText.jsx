import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./TaskText.module.css";

const TaskText = ({ item }) => {
  const navigate = useNavigate();
  function showDescription(id) {
    navigate("/task/" + id);
  }
  return (
    <div onClick={() => showDescription(item.id)} className={classes.item}>
      <h3 className={classes.title}>{item.title}</h3>
      <p style={{ color: item.status ? "green" : "red" }}>
        {item.status ? "Готов" : "Не готов"}
      </p>
      <p className={classes.cost}>
        Количество выбранных услуг: {item.priceIds.length}
      </p>
    </div>
  );
};

export default TaskText;
