import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from "../../ClassApi";
import TaskInfo from "./TaskInfo/TaskInfo";

const Task = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [pricesArray, setPricesArray] = useState(null);
  const [fullPrice, setFullPrice] = useState(0);

  useEffect(() => {
    Api.getTask(id).then((res) => {
      setData(res);
    });
  }, [id]);

  useEffect(() => {
    if (data) {
      Api.pricesIds(data.priceIds).then((res) => {
        let price = 0;
        for (let i = 0; i < res.length; i++) {
          price += res[i].cost;
        }
        setFullPrice(price);
        setPricesArray(res);
      });
    }
  }, [data]);

  const showTask = (
    <TaskInfo pricesArray={pricesArray} fullPrice={fullPrice} data={data} />
  );

  function loadUpdateTask(e) {
    e.preventDefault();
    navigate("/update-task/" + id);
  }

  return (
    <div className="task">
      <div className="task__header">
        <h1 className="task__header-title">{props.text}</h1>
        <a href="/login" onClick={loadUpdateTask} className="task__header-link">
          Хотите изменить заказ?
        </a>
      </div>
      {data && showTask}
    </div>
  );
};

export default Task;
