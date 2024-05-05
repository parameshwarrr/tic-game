import React, { useState } from "react";
import Squares from "./Squares";
import Calculatewiner from "./Calculatewiner";
import Resetgame from "./Resetgame";

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isEffectActive, setIsEffectActive] = useState(true);

  const isSquaresFull = (arr) => {
    return arr.every((element) => element !== null);
  };

  const winner = Calculatewiner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
    document.body.style.background =
      "radial-gradient(circle, rgba(119,57,84,1) 10%, rgba(148,187,233,1) 100%)";
  } else if (isSquaresFull(squares)) {
    status = "Draw";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const onHandleClick = (i) => {
    if (squares[i] || Calculatewiner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
      setIsEffectActive(false);
    } else {
      nextSquares[i] = "O";
      setIsEffectActive(true);
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    // setIsEffectActive(!isEffectActive);
  };

  const onHandleReset = () => {
    return (
      setXIsNext(true) &
      setSquares(Array(9).fill(null)) &
      setIsEffectActive(true) &
      (document.body.style.background =
        "radial-gradient(circle, #416260, #37555d, #364756, #383848, #372b37) ")
    );
  };

  return (
    <>
      <div className="gamename">Tic-Tac-Toe</div>
      <div className="status">{status}</div>
      <div className="square-border">
        {squares.map((value, index) => (
          <Squares
            key={index}
            value={value}
            onSquareClick={() => onHandleClick(index)}
            hovereffect={!value && isEffectActive}
          />
        ))}
      </div>
      <div className="reset">
        <Resetgame
          onResetGame={() => {
            onHandleReset();
          }}
        />
      </div>
    </>
  );
}

export default Board;
