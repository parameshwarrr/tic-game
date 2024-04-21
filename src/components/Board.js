import React, { useState } from "react";
import Squares from "./Squares";
import Calculatewiner from "./Calculatewiner";
import Resetgame from "./Resetgame";

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const winner = Calculatewiner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
    document.body.style.background = "#863757";
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
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const onHandleReset = () => {
    return (
      setXIsNext(true) &
      setSquares(Array(9).fill(null)) &
      (document.body.style.background = "#262c3a")
    );
  };

  return (
    <>
      <div className="gamename">Tic-tac-toe</div>
      <div className="status">{status}</div>
      <div className="square-border">
        <Squares value={squares[0]} onSquareClick={() => onHandleClick(0)} />
        <Squares value={squares[1]} onSquareClick={() => onHandleClick(1)} />
        <Squares value={squares[2]} onSquareClick={() => onHandleClick(2)} />
        <Squares value={squares[3]} onSquareClick={() => onHandleClick(3)} />
        <Squares value={squares[4]} onSquareClick={() => onHandleClick(4)} />
        <Squares value={squares[5]} onSquareClick={() => onHandleClick(5)} />
        <Squares value={squares[6]} onSquareClick={() => onHandleClick(6)} />
        <Squares value={squares[7]} onSquareClick={() => onHandleClick(7)} />
        <Squares value={squares[8]} onSquareClick={() => onHandleClick(8)} />
      </div>
      <div className="reset">
        <Resetgame onResetGame={() => onHandleReset()} />
      </div>
    </>
  );
}

export default Board;
