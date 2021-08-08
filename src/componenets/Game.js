import React, { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";
import Gameboard from "./Gameboard";
import Header from "./Header";
import { getCharacterList } from "../resources/cardInfo";
export default function Game() {
  const [chars, setChars] = useState(getCharacterList);
  const [newSelection, setNewSelection] = useState(true);
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

  function toggleSelected(e) {
    let newArrayList = chars;
    newArrayList.forEach((item) => {
      if (item.uniqueId === e.target.dataset.key) {
        item.selected = true;
        console.log(newArrayList);
      }
    });
    setNewSelection(true);
    setChars([...newArrayList]);
  }
  return (
    <div className="App">
      <Header />
      <Scoreboard />
      <Gameboard characters={chars} handleEvent={toggleSelected} />
    </div>
  );
}
