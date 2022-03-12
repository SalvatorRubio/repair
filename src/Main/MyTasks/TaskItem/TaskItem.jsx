import React from "react";
import classes from "./TaskItem.module.css";
import Api from "../../../ClassApi";
import TaskText from "./TaskText/TaskText";

const TaskItem = ({ item, data, set }) => {
  function deleteItem(id) {
    set(data.filter((el) => el.id !== id));
    Api.deleteTasks(id).then((res) => console.log(res));
  }

  return (
    <div className={classes.item} id={item.id} to="/price">
      <TaskText item={item} />
      <div onClick={() => deleteItem(item.id)} className={classes.delete}></div>
    </div>
  );
};

export default TaskItem;
