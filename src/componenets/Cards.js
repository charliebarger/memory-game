// import React, { useEffect, useState } from "react";
import "../App";
// import { getCharacterList } from "../resources/cardInfo";

export default function Cards(props) {
  const { characters, handleEvent } = props;
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
