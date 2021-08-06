import React from "react";
import "../App";
import { useState } from "react";
import { uniqueId } from "lodash";

export default function Cards() {
  const characters = [
    { name: "Kenny", image: "/images/characters/kenny-mccormick.png" },
    { name: "Cartman", image: "/images/characters/eric-cartman.png" },
    { name: "Butters", image: "/images/characters/butters-stotch.png" },
    { name: "Chef", image: "/images/characters/chef-2.png" },
    { name: "Jimmy", image: "/images/characters/jimmy-valmer.png" },
    { name: "Kyle", image: "/images/characters/kyle-broflovski.png" },
    { name: "Mr. Hankey", image: "/images/characters/mr-hankey.png" },
    {
      name: "Barbrady",
      image: "/images/characters/officer-barbrady.png",
    },
    { name: "Stan", image: "/images/characters/stan-marsh.png" },
    { name: "Towelie", image: "/images/characters/towelie.png" },
    { name: "Ike", image: "/images/characters/ike.png" },
    { name: "Wendy", image: "/images/characters/wendy.png" },
  ];
  characters.forEach((character) => {
    character.uniqueId = uniqueId("character_");
  });
  console.log(characters);
  const [chars, setChars] = useState(characters);

  const shuffle = () => {
    let newOrder = chars.sort(() => Math.random() - 0.5);
    console.log(newOrder);
    setChars(newOrder);
  };
  return chars.map((character) => (
    <div className="card" onClick={shuffle} key={character.uniqueId}>
      <div className="card-wrapper">
        <img
          alt={character.name}
          src={`${process.env.PUBLIC_URL + character.image}`}
        />
      </div>
      <p>{character.name}</p>
    </div>
  ));
}
