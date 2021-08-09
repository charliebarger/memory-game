import React, { useState } from "react";
import "../App";

export default function Scoreboard(props) {
  const characters = props.characters;
  let currentScore = 0;
  const [highScore, setHighScore] = useState(props.currentScore);
  if (props.currentScore > highScore) {
    setHighScore(props.currentScore);
  }
  return (
    <div className="scoreboard">
      <span>Current Score: {props.currentScore}</span>
      <div className="flex-gap"></div>
      <span>High Score: {highScore}</span>
    </div>
  );
}
