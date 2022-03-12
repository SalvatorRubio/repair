import Api from "../../ClassApi";
import React from "react";
import { useEffect, useState } from "react";
import classes from "./Price.module.css";
import PriceItem from "./PriceItem/PriceItem";

const Price = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Api.getPrice().then((res) => {
      setData(res);
    });
  }, []);

  function prices() {
    if (data.length > 0) {
      return data.map((item, i) => (
        <PriceItem
          key={i}
          name={item.name}
          cost={item.cost}
          time={item.minutesOfWork}
        />
      ));
    }
  }
  return (
    <div className="margin">
      <h1 className="title">{props.text}</h1>
      <div className={classes.items}>{prices()}</div>
    </div>
  );
};

export default Price;
