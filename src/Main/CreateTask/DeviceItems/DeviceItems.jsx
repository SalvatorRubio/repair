import React from "react";
import { useEffect, useState } from "react";
import Api from "../../../ClassApi";

const DeviceItems = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Api.getDeviceForUpdate(props.producer).then((res) => {
      setData(res);
    });
  }, [props.producer]);

  function optionsData() {
    if (data.length) {
      return data.map((item, i) => {
        return (
          <option key={i} value={item.id}>
            {item.name}
          </option>
        );
      });
    } else {
      return (
        <option value="Отсутствует ремонт данного производителя">
          Отсутствует ремонт данного производителя
        </option>
      );
    }
  }
  return (
    <>
      <p>Выберите технику</p>
      <select onChange={(e) => props.func(e.target.value)}>
        {optionsData()}
      </select>
    </>
  );
};

export default DeviceItems;
