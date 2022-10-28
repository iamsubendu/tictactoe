import React from 'react';

const Square = (props) => {
  return (
    <div className="square" onClick={props.change}>
      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;
