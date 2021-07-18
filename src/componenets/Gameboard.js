import React from "react";
import "../App";
import Cards from "./Cards";

export default function Gameboard() {
  return (
    <div className="gamebaord-wrapper">
      <div className="gameboard">
        <Cards />
      </div>
    </div>
  );
}
