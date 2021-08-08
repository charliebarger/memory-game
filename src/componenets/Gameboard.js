import React from "react";
import "../App";
import Cards from "./Cards";

export default function Gameboard(props) {
  console.log(props);
  return (
    <div className="gamebaord-wrapper">
      {props.gameOver ? (
        <div>
          <div>Dont you Membaa?? You picked {props.lastPick}</div>
          <button onClick={() => props.resetGame(false)}>Reset Game</button>
        </div>
      ) : (
        <div className="gameboard">
          <Cards
            characters={props.characters}
            handleEvent={props.handleEvent}
          />
        </div>
      )}
    </div>
  );
}
