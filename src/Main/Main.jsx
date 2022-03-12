import React from "react";
import classes from "./Main.module.css";
import { Routes, Route } from "react-router-dom";
import DeviceCategories from "./DeviceCategories/DeviceCategories";
import Producers from "./Producers/Producers";
import Devices from "./Devices/Devices";
import Price from "./Price/Price";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import MyTasks from "./MyTasks/MyTasks";
import RequireAuth from "../hoc/RequireAuth";
import Task from "./Task/Task";
import UpdateTask from "./UpdateTask/UpdateTask";
import CreateTask from "./CreateTask/CreateTask";

function Main() {
  return (
    <div className={classes.intro}>
      <div className="container">
        <div className={classes.body}>
          <Routes>
            <Route
              path="/"
              element={<DeviceCategories text="Выберите категорию" />}
            />
            <Route
              path="/producers"
              element={<Producers text="Выберите производителя" />}
            />
            <Route
              path="/devices"
              element={<Devices text="Выберите технику" />}
            />
            <Route path="/price" element={<Price text="Выберите услуги" />} />
            <Route path="/login" element={<Login text="Авторизироваться" />} />
            <Route
              path="/regisration"
              element={<Registration text="Зарегистрироваться" />}
            />
            <Route
              path="/tasks"
              element={
                <RequireAuth>
                  <MyTasks text="Ваши заказы" />
                </RequireAuth>
              }
            />
            <Route
              path="/task/:id"
              element={
                <RequireAuth>
                  <Task text="Описание заказа" />
                </RequireAuth>
              }
            />
            <Route
              path="/update-task/:id"
              element={
                <RequireAuth>
                  <UpdateTask text="Изменение заказа" />
                </RequireAuth>
              }
            />
            <Route
              path="/create-task/"
              element={
                <RequireAuth>
                  <CreateTask text="Создание заказа" />
                </RequireAuth>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Main;
