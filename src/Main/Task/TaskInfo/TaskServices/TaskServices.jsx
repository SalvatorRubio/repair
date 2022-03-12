import React from "react";

const TaskServices = (props) => {
  function priceInfo() {
    if (props.price) {
      return props.price.map((item, i) => {
        return (
          <React.Fragment key={i}>
            <div className="services__item">
              <h1 className="services__item-title">
                {i + 1}. {item.name}
              </h1>
              <p className="services__item-cost">Цена: {item.cost}</p>
              <p className="services__item-time">
                Примерное время на работу: {item.minutesOfWork} день
              </p>
            </div>
          </React.Fragment>
        );
      });
    }
  }

  return (
    <div className="task__services services">
      <h1 className="services__title">Выбранные услуги:</h1>
      <div className="services__items">{priceInfo()}</div>
    </div>
  );
};

export default TaskServices;
