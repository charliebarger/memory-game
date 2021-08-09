import React from "react";
import "../App";
import Cards from "./Cards";

export default function Gameboard(props) {
  console.log(props);
  let showStatus = props.gameOver ? "showIt" : "hidden";
  return (
    <div className="gamebaord-wrapper">
      <div className="gameboard">
        <Cards characters={props.characters} handleEvent={props.handleEvent} />
        <div className={showStatus}>
          <p className="reset-message">
            Dont you Membaa?? You picked {props.lastPick}!
          </p>
          <div className="reset-image-wrapper">
            <img
              className="reset-image"
              alt="Member Berry"
              src={`${
                process.env.PUBLIC_URL + "/images/characters/member.png"
              }`}
            />
          </div>
          <button
            className="reset-button"
            onClick={() => props.resetGame(false)}
          >
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
}
