import React, { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";
import Gameboard from "./Gameboard";
import Header from "./Header";
import { getCharacterList } from "../resources/cardInfo";
export default function Game() {
  const [chars, setChars] = useState(getCharacterList);
  const [newSelection, setNewSelection] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [lastSelected, setLastSelected] = useState();
  const [score, setScore] = useState(0);

  //shuffle on load and new selection
  useEffect(() => {
    if (newSelection) {
      setNewSelection(false);
      const shuffle = () => {
        let newOrder = chars;
        newOrder.sort(() => Math.random() - 0.5);
        setChars([...newOrder]);
      };
      shuffle();
    }
  }, [chars, newSelection]);

  //shuffle on game Over
  useEffect(() => {
    if (gameOver) {
      setNewSelection(true);
      setChars(getCharacterList);
    }
  }, [gameOver]);

  useEffect(() => {
    if (score === 12) {
      setGameOver(true);
    }
  }, [score]);

  //loop through list and find if clicked item has been selected yet. Increase score if it has not been, Game over if it has. At the end change new selection to true and reset characters with updated array
  function toggleSelected(e) {
    let newArrayList = chars;
    newArrayList.forEach((item) => {
      if (item.uniqueId === e.target.dataset.key) {
        if (!item.selected) {
          item.selected = true;
          setScore((prevScore) => prevScore + 1);
        } else {
          setLastSelected(item.name);
          setGameOver(true);
        }
      }
    });
    setNewSelection(true);
    setChars([...newArrayList]);
  }

  return (
    <div className="App">
      <Header />
      <Scoreboard characters={chars} gameOver={gameOver} currentScore={score} />
      <Gameboard
        characters={chars}
        handleEvent={toggleSelected}
        gameOver={gameOver}
        resetGame={setGameOver}
        resetScore={setScore}
        lastPick={lastSelected}
        score={score}
      />
    </div>
  );
}
