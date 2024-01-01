import { useState } from "react";

// 리액트 컴포넌트는 부모 컴포넌트가 리렌더링되면 자식 컴포넌트도 리렌더링된다.
// 자식 컴포넌트의 props나 state에 변경사항이 있었느냐는 무관하다.
// https://velog.io/@mogulist/understanding-react-rerender-easily

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(idx) {
    if (squares[idx] !== "-" || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[idx] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status = winner
    ? "Winner : " + winner
    : "Next Player : " + (xIsNext ? "X" : "O");

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a] !== "-" &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill("-")]);
  const [currentMoveIdx, setCurrentMoveIdx] = useState(0);
  const xIsNext = currentMoveIdx % 2 === 0;
  const currentSquares = history[currentMoveIdx];

  function jumpTo(moveIdx) {
    setCurrentMoveIdx(moveIdx);
  }

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMoveIdx + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMoveIdx(nextHistory.length - 1);
  }

  const moves = history.map((squares, moveIdx) => {
    let description =
      moveIdx >= 1 ? "Go to move # " + moveIdx : "Go to game start";

    return (
      <li key={moveIdx}>
        <button onClick={() => jumpTo(moveIdx)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        {/* 부모 컴포넌트인 Game이 리렌더링되면 자식 컴포넌트인 Board 또한 리렌더링 된다.*/}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
