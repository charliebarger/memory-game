import "./App.css";
import React from "react";
import Scoreboard from "./componenets/Scoreboard";
import Gameboard from "./componenets/Gameboard";
import Header from "./componenets/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Scoreboard />
      <Gameboard />
    </div>
  );
}

export default App;
