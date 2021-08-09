import React from "react";

const ResetButton = (props) => {
  const { text, handleEvent } = props;
  return (
    <button className="reset-button" onClick={handleEvent}>
      {text}
    </button>
  );
};

export default ResetButton;
