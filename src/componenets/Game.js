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

  useEffect(() => {
    if (gameOver === true) {
      setChars(getCharacterList);
    }
  }, [gameOver]);

  function toggleSelected(e) {
    let newArrayList = chars;
    newArrayList.forEach((item) => {
      if (item.uniqueId === e.target.dataset.key) {
        if (!item.selected) {
          item.selected = true;
        } else {
          console.log(item.name);
          setLastSelected(item.name);
          setGameOver(true);
        }
      }
    });
    setNewSelection(true);
    setChars([...newArrayList]);
  }

  const resetGame = () => {
    setGameOver(false);
  };
  return (
    <div className="App">
      <Header />
      <Scoreboard characters={chars} gameOver={gameOver} />
      <Gameboard
        characters={chars}
        handleEvent={toggleSelected}
        gameOver={gameOver}
        resetGame={setGameOver}
        lastPick={lastSelected}
      />
    </div>
  );
}
