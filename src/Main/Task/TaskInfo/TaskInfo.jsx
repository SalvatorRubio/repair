import React from "react";
import TaskServices from "./TaskServices/TaskServices";

const TaskInfo = ({ data, fullPrice, pricesArray }) => {
  return (
    <div className="task__inner">
      <div className="task__inner-header">
        <h1 className="task__title">{data.title}</h1>
        <h1 className="task__cost">Итоговая сумма: {fullPrice}р.</h1>
      </div>
      <div className="task__description">
        <h1>Описание заказа:</h1>
        <p>{data.description}</p>
      </div>
      <TaskServices price={pricesArray} />
    </div>
  );
};

export default TaskInfo;
