import { uniqueId } from "lodash";

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

const assignId = (arrayList) => {
  arrayList.forEach((character) => {
    character.uniqueId = uniqueId("character_");
    character.selected = false;
  });
  return arrayList;
};

export function getCharacterList() {
  console.log("reached");
  return assignId(characters);
}
