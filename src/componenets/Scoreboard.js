import React, { useState } from "react";
import "../App";

export default function Scoreboard(props) {
  const characters = props.characters;
  console.log(characters);
  let currentScore = 0;
  const [highScore, setHighScore] = useState(currentScore);

  const setScore = () => {
    characters.forEach((character) => {
      if (character.selected) {
        currentScore += 1;
      }
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
    });
  };
  !props.gameOver ? setScore() : (currentScore = 0);
  return (
    <div className="scoreboard">
      <span>Current Score: {currentScore}</span>
      <div className="flex-gap"></div>
      <span>High Score: {highScore}</span>
    </div>
  );
}
