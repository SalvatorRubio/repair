import React from "react";
import { useEffect, useState } from "react";
import Api from "../../../ClassApi";

const DevCategoryItems = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Api.getDeviceCategories().then((res) => {
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
      <p>Выберите категорию</p>
      <select onChange={(e) => props.func(e.target.value)}>
        {optionsData()}
      </select>
    </>
  );
};

export default DevCategoryItems;
