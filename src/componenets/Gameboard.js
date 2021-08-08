import React from "react";
import "../App";
import Cards from "./Cards";

export default function Gameboard(props) {
  console.log(props);
  return (
    <div className="gamebaord-wrapper">
      <div className="gameboard">
        <Cards characters={props.characters} handleEvent={props.handleEvent} />
      </div>
    </div>
  );
}
