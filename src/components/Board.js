import React, { useState } from "react";
import Squares from "./Squares";
import Calculatewiner from "./Calculatewiner";
import Resetgame from "./Resetgame";

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isEffectActive, setIsEffectActive] = useState(true);

  const winner = Calculatewiner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
    document.body.style.background =
      "radial-gradient(circle, rgba(119,57,84,1) 10%, rgba(148,187,233,1) 100%)";
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
        <Squares
          value={squares[0]}
          onSquareClick={() => onHandleClick(0)}
          hovereffect={isEffectActive}
        />
        <Squares
          value={squares[1]}
          onSquareClick={() => onHandleClick(1)}
          hovereffect={isEffectActive}
        />
        <Squares
          value={squares[2]}
          onSquareClick={() => onHandleClick(2)}
          hovereffect={isEffectActive}
        />
        <Squares
          value={squares[3]}
          onSquareClick={() => onHandleClick(3)}
          hovereffect={isEffectActive}
        />
        <Squares
          value={squares[4]}
          onSquareClick={() => onHandleClick(4)}
          hovereffect={isEffectActive}
        />
        <Squares
          value={squares[5]}
          onSquareClick={() => onHandleClick(5)}
          hovereffect={isEffectActive}
        />
        <Squares
          value={squares[6]}
          onSquareClick={() => onHandleClick(6)}
          hovereffect={isEffectActive}
        />
        <Squares
          value={squares[7]}
          onSquareClick={() => onHandleClick(7)}
          hovereffect={isEffectActive}
        />
        <Squares
          value={squares[8]}
          onSquareClick={() => onHandleClick(8)}
          hovereffect={isEffectActive}
        />
      </div>
      <div className="reset">
        <Resetgame onResetGame={() => onHandleReset()} />
      </div>
    </>
  );
}

export default Board;
