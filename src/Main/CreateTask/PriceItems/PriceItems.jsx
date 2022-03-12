import React from "react";
import { useEffect, useState } from "react";
import Api from "../../../ClassApi";

const PriceItems = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Api.getPrice().then((res) => {
      setData(res);
    });
  }, []);

  function optionsData() {
    if (data) {
      return data.map((item, i) => {
        return (
          <option key={i} value={item.id} className="task__checkbox">
            {item.name} {item.cost}.р
          </option>
        );
      });
    }
  }

  function f(e) {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    props.func(value);
  }
  return (
    <select multiple onChange={f} className="task__form-checkboxes">
      {optionsData()}
    </select>
  );
};

export default PriceItems;
