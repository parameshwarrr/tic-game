import React from "react";
import { useState } from "react";

function Squares({ value, onSquareClick, hovereffect }) {
  // const [value, setValue] = useState(null);
  // const handleclick = () => {
  //   setValue("X");
  // };

  return (
    <>
      <button
        className={`square ${hovereffect ? "effect1" : "effect2"}`}
        onClick={onSquareClick}
      >
        {value}
      </button>
    </>
  );
}

export default Squares;
