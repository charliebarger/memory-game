import React, { useState } from "react";
import "../App";

export default function Scoreboard() {
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  return (
    <div className="scoreboard">
      <span>Current Score: {currentScore}</span>
      <div className="flex-gap"></div>
      <span>High Score: {highScore}</span>
    </div>
  );
}
