import Api from "../../ClassApi";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";

const Nav = () => {
  const { user, singout } = useAuth();

  function logout() {
    Api.logout().then((res) => {
      if (res) {
        singout();
        sessionStorage.clear();
      }
    });
  }

  return (
    <nav className="nav">
      <Link to="/" className="nav_item">
        Главная
      </Link>
      <Link to="/tasks" className="nav_item">
        Мои заказы
      </Link>
      <Link to="/create-task" className="nav_item">
        Создать заказ
      </Link>
      {user ? (
        <Link className="nav_item" to="/">
          {user}
        </Link>
      ) : (
        <Link className="nav_item" to="/login">
          Войти
        </Link>
      )}
      {user ? (
        <Link to="/login" className="nav_item" onClick={logout}>
          Выйти
        </Link>
      ) : (
        <Link className="nav_item" to="/regisration">
          Регистрация
        </Link>
      )}
    </nav>
  );
};

export default Nav;
