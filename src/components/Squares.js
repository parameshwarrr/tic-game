import React from "react";
import { useState } from "react";

function Squares({ value, onSquareClick }) {
  // const [value, setValue] = useState(null);
  // const handleclick = () => {
  //   setValue("X");
  // };

  return (
    <>
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
}

export default Squares;
