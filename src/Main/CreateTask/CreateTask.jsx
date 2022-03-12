import React from "react";
import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import DevCategoryItems from "./DevCategoryItems/DevCategoryItems";
import DeviceItems from "./DeviceItems/DeviceItems";
import PriceItems from "./PriceItems/PriceItems";
import ProducerItems from "./ProducerItems/ProducerItems";
import Api from "../../ClassApi";
import { useNavigate } from "react-router-dom";

const UpdateTask = (props) => {
  const navigate = useNavigate();
  const [devCategs, setDevCategs] = useState(1);
  const [producer, setProducer] = useState(1);
  const [device, setDevice] = useState(1);
  const [prices, setPrices] = useState("");
  const [nameTask, setNameTask] = useState("");
  const [descriptionTask, setDescriptionTask] = useState("");
  const [correctly, setCorrectly] = useState(false);

  function getInputValue(e) {
    setNameTask(e);
  }

  function selectDevCategs(e) {
    setDevCategs(e);
  }

  function selectProducer(e) {
    setProducer(e);
  }

  function selectDevice(e) {
    setDevice(e);
  }

  function selectPrices(e) {
    setPrices(e);
  }

  function updateTask(e) {
    e.preventDefault();
    Api.createTask(
      devCategs,
      device,
      producer,
      prices,
      nameTask,
      descriptionTask
    )
      .then(() => navigate("/tasks"))
      .catch(() => setCorrectly(true));
  }

  return (
    <div className="update__task">
      <h1 className="title">{props.text}</h1>
      <form className="update__task-form">
        <label>
          Название
          <FormInput check={getInputValue} type="text" />
        </label>
        <label>
          Описание
          <textarea
            onChange={(e) => setDescriptionTask(e.target.value)}
            cols="30"
            rows="10"
          ></textarea>
        </label>
        <div className="task__form-items">
          <div className="task__form-selects">
            <DevCategoryItems func={selectDevCategs} />
            <ProducerItems func={selectProducer} />
            <DeviceItems producer={producer} func={selectDevice} />
          </div>
          <PriceItems func={selectPrices} />
        </div>
        <div className="task__form-btn">
          <button onClick={updateTask}>Изменить заказ</button>
        </div>
        {correctly && <p className="err">Не правильно введены данные</p>}
      </form>
    </div>
  );
};

export default UpdateTask;
