import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import AuthProvider from "./hoc/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Main />
      </AuthProvider>
    </div>
  );
}

export default App;
