import React from "react";
import { useEffect, useState } from "react";
import Api from "../../../ClassApi";

const ProducerItems = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Api.getProducers().then((res) => {
      setData(res);
    });
  }, []);

  function optionsData() {
    if (data) {
      return data.map((item, i) => {
        return (
          <option key={i} value={item.id}>
            {item.name}
          </option>
        );
      });
    }
  }
  return (
    <>
      <p>Выберите производителя</p>
      <select onChange={(e) => props.func(e.target.value)}>
        {optionsData()}
      </select>
    </>
  );
};

export default ProducerItems;
