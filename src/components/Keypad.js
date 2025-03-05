import React from "react";
import Button from "./Button";

const Keypad = ({ onNumberClick, onOperatorClick, onClear, onEquals }) => {
  return (
    <div className="keypad-grid">
      <Button onClick={onClear}>AC</Button>
      <Button>±</Button>
      <Button>%</Button>
      <Button className="operator" onClick={() => onOperatorClick("÷")}>
        ÷
      </Button>

      <Button onClick={() => onNumberClick("7")}>7</Button>
      <Button onClick={() => onNumberClick("8")}>8</Button>
      <Button onClick={() => onNumberClick("9")}>9</Button>
      <Button className="operator" onClick={() => onOperatorClick("×")}>
        ×
      </Button>

      <Button onClick={() => onNumberClick("4")}>4</Button>
      <Button onClick={() => onNumberClick("5")}>5</Button>
      <Button onClick={() => onNumberClick("6")}>6</Button>
      <Button className="operator" onClick={() => onOperatorClick("-")}>
        -
      </Button>

      <Button onClick={() => onNumberClick("1")}>1</Button>
      <Button onClick={() => onNumberClick("2")}>2</Button>
      <Button onClick={() => onNumberClick("3")}>3</Button>
      <Button className="operator" onClick={() => onOperatorClick("+")}>
        +
      </Button>

      <Button className="zero" onClick={() => onNumberClick("0")}>
        0
      </Button>
      <Button onClick={() => onNumberClick(".")}>.</Button>
      <Button className="operator" onClick={onEquals}>
        =
      </Button>
    </div>
  );
};

export default Keypad;
