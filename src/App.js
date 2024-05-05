import logo from "./logo.svg";
import HomePage from "./components/HomePage";
import Board from "./components/Board";
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="playgame" Component={Board} />
        </Routes>
      </div>
    </>
  );
}

export default App;
