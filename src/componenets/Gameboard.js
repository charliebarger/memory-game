import React from "react";
import "../App";
import Cards from "./Cards";
import GameOver from "./GameOver";

export default function Gameboard(props) {
  return (
    <div className="gamebaord-wrapper">
      <div className="gameboard">
        <Cards characters={props.characters} handleEvent={props.handleEvent} />
        <GameOver
          gameOver={props.gameOver}
          resetGame={props.resetGame}
          resetScore={props.resetScore}
          lastPick={props.lastPick}
          score={props.score}
        />
      </div>
    </div>
  );
}
