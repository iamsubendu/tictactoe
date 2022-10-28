import React from 'react';

const Square = (props) => {
  return (
    <div className="square" onClick={props.change}>
      <h5 style={{ color: props.value === 'X' ? 'green' : 'orange' }}>
        {props.value}
      </h5>
    </div>
  );
};

export default Square;
