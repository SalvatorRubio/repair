import React from "react";
import { useState, useEffect } from "react";
import Api from "../../ClassApi";
import { Link } from "react-router-dom";

const Producers = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Api.getProducers().then((res) => {
      setData(res);
    });
  }, []);

  function setSession(id) {
    sessionStorage.setItem("producer", id);
  }

  function producers() {
    if (data) {
      return data.map((item, i) => (
        <Link
          className="item"
          onClick={() => setSession(item.id)}
          key={i}
          to="/devices"
        >
          <img className="img" src={require("../img/1.jpg")} alt="" />
          <h3 className="description">{item.name}</h3>
        </Link>
      ));
    }
  }
  return (
    <div>
      <h1 className="title">{props.text}</h1>
      <div className="items">{producers()}</div>
    </div>
  );
};

export default Producers;
