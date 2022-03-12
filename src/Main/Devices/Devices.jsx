import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Api from "../../ClassApi";

const Producers = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Api.getDevice().then((res) => {
      setData(res);
    });
  }, []);

  function devices() {
    if (data.length > 0) {
      return data.map((item, i) => (
        <Link className="item" key={i} to="/price">
          <img className="img" src={require("../img/1.jpg")} alt="" />
          <h3 className="description">{item.name}</h3>
        </Link>
      ));
    } else {
      return (
        <h1 className="description">
          Извините! В данный момент услуги по выбранному производителю
          отсутствуют
        </h1>
      );
    }
  }
  return (
    <div className="margin">
      <h1 className="title">{props.text}</h1>
      <div className="items">{devices()}</div>
    </div>
  );
};

export default Producers;
