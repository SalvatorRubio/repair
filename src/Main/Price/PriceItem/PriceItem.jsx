import React from "react";
import classes from "./PriceItem.module.css";

const PriceItem = (props) => {
  return (
    <div className={classes.item}>
      <h1 className={classes.name}>{props.name}</h1>
      <div className={classes.description}>
        <h3 className={classes.cost}>Цена: {props.cost}р.</h3>
        <h3 className={classes.time}>Длительность: {props.time} день</h3>
      </div>
    </div>
  );
};

export default PriceItem;
