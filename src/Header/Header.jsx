import React from "react";
import classes from "./Header.module.css";
import Nav from "./Nav/Nav";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.body}>
          <h1 className={classes.title}>Ремонт техники</h1>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
