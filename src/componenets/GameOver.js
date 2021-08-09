import React from "react";

const GameOver = (props) => {
  console.log(props);
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
      <button
        className="reset-button"
        onClick={() => {
          props.resetGame(false);
          props.resetScore(0);
        }}
      >
        Reset Game
      </button>
    </div>
  );
};

export default GameOver;
