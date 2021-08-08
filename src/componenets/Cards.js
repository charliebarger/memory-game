// import React, { useEffect, useState } from "react";
import "../App";
// import { getCharacterList } from "../resources/cardInfo";

export default function Cards(props) {
  const { characters, handleEvent } = props;
  // const [chars, setChars] = useState(getCharacterList);
  // const [newSelection, setNewSelection] = useState(true);
  // useEffect(() => {
  //   if (newSelection) {
  //     setNewSelection(false);
  //     const shuffle = () => {
  //       let newOrder = chars;
  //       newOrder.sort(() => Math.random() - 0.5);
  //       setChars([...newOrder]);
  //     };
  //     shuffle();
  //   }
  // }, [chars, newSelection]);

  // function toggleSelected(e, arrayList) {
  //   let newArrayList = arrayList;
  //   newArrayList.forEach((item) => {
  //     if (item.uniqueId === e.target.dataset.key) {
  //       item.selected = true;
  //       console.log(newArrayList);
  //     }
  //   });
  //   setNewSelection(true);
  //   setChars([...newArrayList]);
  // }

  return characters.map((character) => (
    <div
      className="card"
      onClick={handleEvent}
      key={character.uniqueId}
      data-key={character.uniqueId}
    >
      <div className="card-wrapper">
        <img
          className="card-image"
          alt={character.name}
          src={`${process.env.PUBLIC_URL + character.image}`}
        />
      </div>
      <p className="card-name">{character.name}</p>
    </div>
  ));
}
