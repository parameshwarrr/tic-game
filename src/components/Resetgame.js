import React from "react";

function Resetgame({ onResetGame }) {
  return (
    <div>
      <button className="reset-button" onClick={onResetGame}>
        Reset
      </button>
    </div>
  );
}

export default Resetgame;
