"use strict";
import { useState } from 'react';
import './App.css';


function App() {
  const initialBoard = Array(9).fill(null);

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  };

  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    if (board[index] || checkWinner(board)) {
      // If the square is already filled or the game is won, do nothing
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = xIsNext ? 'X' : 'O';

    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setXIsNext(true);
  };

  const winner = checkWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <>
      <div className="container">
        <div className="board">
          {board.map((square, index) => (
            <div
              key={index}
              className="box"
              onClick={() => handleClick(index)}
            >
              {square}
            </div>
          ))}
        </div>
        <div className="status">{status}</div>
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </>
  );
}

export default App;
