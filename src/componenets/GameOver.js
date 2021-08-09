import React from "react";
import ResetButton from "./ResetButton";
const GameOver = (props) => {
  let showStatus = props.gameOver ? "showIt" : "hidden";
  return (
    <div className={showStatus}>
      <p className="reset-message">
        {props.score === 12
          ? "You Membered Them All!!!"
          : `Dont you Membaa?? You picked ${props.lastPick}!`}
      </p>
      <div className="reset-image-wrapper">
        <img
          className="reset-image"
          alt="Member Berry"
          src={`${process.env.PUBLIC_URL + "/images/characters/member.png"}`}
        />
      </div>
      <ResetButton
        text="Reset Game"
        handleEvent={() => {
          props.resetGame(false);
          props.resetScore(0);
        }}
      />
    </div>
  );
};

export default GameOver;
