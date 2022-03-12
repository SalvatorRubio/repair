import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Api from "../../ClassApi";

const DeviceCategories = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Api.getDeviceCategories().then((res) => {
      setData(res);
    });
  }, []);

  function setSession(id) {
    sessionStorage.setItem("devCat", id);
  }

  function devCategor() {
    if (data) {
      return data.map((item, i) => (
        <Link
          className="item"
          onClick={() => setSession(item.id)}
          key={i}
          to="/producers"
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
      <div className="items">{devCategor()}</div>
    </div>
  );
};

export default DeviceCategories;
