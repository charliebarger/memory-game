import "./App.css";
import React from "react";
import Header from "./componenets/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="scoreboard">
        <span>Current Score: 0</span>
        <div className="flex-gap"></div>
        <span>Best Score: 0</span>
      </div>
      <div className="gamebaord-wrapper">
        <div className="gameboard"></div>
      </div>
    </div>
  );
}

export default App;
