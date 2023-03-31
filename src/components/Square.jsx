import React from 'react';

const Square = ({ value, onClick }) => {
  // We need to update the state when we click a square, here react evans comes into play
  // By clicking "on" we can get a list on evans available for a html tag
  
  // console.log('Square rerender');
  
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
