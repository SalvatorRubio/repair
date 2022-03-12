import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import Api from "../../ClassApi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState(false);
  const navigate = useNavigate();
  const { singin } = useAuth();

  function emailValue(e) {
    setEmail(e);
  }

  function passwordValue(e) {
    setPassword(e);
  }

  function sendRequest(e) {
    e.preventDefault();
    Api.login(email, password)
      .then((res) => {
        sessionStorage.setItem("user", res.user.name);
        sessionStorage.setItem("idUser", res.user.id);
        localStorage.setItem("refreshToken", res.token);
        singin(res.user.name);
        navigate("/", { replace: true });
      })
      .catch(() => {
        setValidate(true);
      });
  }

  return (
    <div className="login">
      <h1 className="title">{props.text}</h1>
      <form className="form">
        <FormInput type="email" check={emailValue} name="Email*" />
        <FormInput type="phone" name="Номер телефона" />
        <FormInput type="password" check={passwordValue} name="Пароль*" />
        <button onClick={sendRequest} className="form__btn">
          Войти
        </button>
        {validate && (
          <p className="err">Не правильно введена почта или пароль</p>
        )}
      </form>
    </div>
  );
};

export default Login;
