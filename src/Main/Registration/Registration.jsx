import React from "react";
import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import Api from "../../ClassApi";
import { Navigate } from "react-router-dom";

const Registration = (props) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState(false);

  function checkLogin(e) {
    setLogin(e);
  }

  function emailValue(e) {
    setEmail(e);
  }

  function phoneValue(e) {
    setPhone(e);
  }

  function passwordValue(e) {
    setPassword(e);
  }

  function sendRequest(e) {
    e.preventDefault();
    Api.registation(login, email, password, phone)
      .then(() => {
        <Navigate to="/login" />;
      })
      .catch(() => {
        setValidate(true);
      });
  }

  return (
    <div className="login">
      <h1 className="title">{props.text}</h1>
      <form className="form">
        <FormInput type="text" check={checkLogin} name="Логин" />
        <FormInput type="email" check={emailValue} name="Email" />
        <FormInput type="phone" check={phoneValue} name="Номер телефона" />
        <FormInput type="password" check={passwordValue} name="Пароль" />
        <button className="form__btn" onClick={sendRequest}>
          Войти
        </button>
        {validate && (
          <p className="err">Не правильно введена почта или пароль</p>
        )}
      </form>
    </div>
  );
};

export default Registration;
