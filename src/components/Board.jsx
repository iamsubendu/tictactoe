import React from 'react';
import { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [plyrOne, setPlyrOne] = useState(true);
  const handleClick = (index) => {
    if (state[index] !== null) return;
    const value = [...state];
    value[index] = plyrOne ? 'X' : 'O';
    setState(value);
    setPlyrOne(!plyrOne);
  };
  const checkWinner = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winner) {
      const [x, y, z] = logic;
      if (state[x] !== null && state[x] === state[y] && state[x] === state[z]) {
        // state[0] must be equal to state[1] that to be X/O
        return state[x];
      }
    }
    return false;
  };
  const isWinner = checkWinner();
  const handleReset = () => {
    setState(Array(9).fill(null));
  };
  return (
    <div className="board">
      {isWinner ? (
        <div className="winner">
          {isWinner} won the game
          <button onClick={handleReset}>Play again</button>
        </div>
      ) : (
        <>
          <h4>Player {plyrOne ? '1' : '2'} turn</h4>
          <div className="row">
            <Square value={state[0]} change={() => handleClick(0)} />
            <Square value={state[1]} change={() => handleClick(1)} />
            <Square value={state[2]} change={() => handleClick(2)} />
          </div>
          <div className="row">
            <Square value={state[3]} change={() => handleClick(3)} />
            <Square value={state[4]} change={() => handleClick(4)} />
            <Square value={state[5]} change={() => handleClick(5)} />
          </div>
          <div className="row">
            <Square value={state[6]} change={() => handleClick(6)} />
            <Square value={state[7]} change={() => handleClick(7)} />
            <Square value={state[8]} change={() => handleClick(8)} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
