import React from "react";

const LoginItem = (props) => {
  return (
    <div className="form__item">
      {props.name && <h4>{props.name}</h4>}
      <input
        type={props.type}
        className="form__item"
        onChange={(e) => props.check(e.target.value)}
      />
    </div>
  );
};

export default LoginItem;
