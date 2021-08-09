import React, { useState } from "react";
import "../App";

export default function Scoreboard(props) {
  const [highScore, setHighScore] = useState(props.currentScore);
  const currentScore = props.currentScore;
  if (props.currentScore > highScore) {
    setHighScore(currentScore);
  }
  return (
    <div className="scoreboard">
      <span>Current Score: {currentScore}</span>
      <div className="flex-gap"></div>
      <span>High Score: {highScore}</span>
    </div>
  );
}
