import React from 'react';
import Board from './components/Board.jsx';

const App = () => {
  return (
    <>
      <h2>Lets play Tic-Tac-Toe</h2>
      <div className="container">
        <Board />
      </div>
    </>
  );
};

export default App;
