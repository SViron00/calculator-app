import React from "react";

const Display = ({ currentValue, previousValue }) => {
  return (
    <div className="display">
      <div className="previous-operand">{previousValue}</div>
      <div className="current-operand">{currentValue}</div>
    </div>
  );
};

export default Display;
