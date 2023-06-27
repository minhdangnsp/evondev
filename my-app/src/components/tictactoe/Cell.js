import React from "react";

const Cell = ({ value, onClick, className }) => {
  // destructuring props
  // const {value, onClick} = props;
  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
