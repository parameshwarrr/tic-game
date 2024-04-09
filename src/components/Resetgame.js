import React from "react";

function Resetgame({ onResetGame }) {
  return (
    <div>
      <button className="resetbutton" onClick={onResetGame}>
        Reset
      </button>
    </div>
  );
}

export default Resetgame;
