import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Api from "../../ClassApi";
import classes from "./MyTasks.module.css";
import TaskItem from "./TaskItem/TaskItem";

const MyTasks = (props) => {
  const [data, setData] = useState("");
  useEffect(() => {
    Api.getTasks().then((res) => {
      setData(res);
    });
  }, []);

  function tasks() {
    if (data.length) {
      return data.map((item, i) => (
        <TaskItem key={i} set={setData} data={data} item={item} />
      ));
    } else {
      return <h1 className="description">Заказы отсутствуют</h1>;
    }
  }

  return (
    <div className="margin tasks">
      <h1 className="title">{props.text}</h1>
      <div className={classes.items}>{tasks()}</div>
    </div>
  );
};

export default MyTasks;
