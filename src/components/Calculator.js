import React, { useState } from "react";
import Display from "./Display";

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState("");

  const handleNumberClick = (number) => {
    if (currentValue === "0") {
      setCurrentValue(number);
    } else {
      setCurrentValue(currentValue + number);
    }
  };
  const handleClear = () => {
    setCurrentValue("0");
    setPreviousValue("");
  };
  return (
    <div className="calculator-container">
      <div className="calculator-wrapper">
        <Display currentValue={currentValue} previousValue={previousValue} />
        <div className="keypad-grid">
          <button className="btn" onClick={handleClear}>
            AC
          </button>
          <button className="btn">±</button>
          <button className="btn">%</button>
          <button className="btn operator">÷</button>
          <button className="btn" onClick={() => handleNumberClick("7")}>
            7
          </button>
          <button className="btn" onClick={() => handleNumberClick("8")}>
            8
          </button>
          <button className="btn" onClick={() => handleNumberClick("9")}>
            9
          </button>
          <button className="btn operator">×</button>
          <button className="btn" onClick={() => handleNumberClick("4")}>
            4
          </button>
          <button className="btn" onClick={() => handleNumberClick("5")}>
            5
          </button>
          <button className="btn" onClick={() => handleNumberClick("6")}>
            6
          </button>
          <button className="btn operator">-</button>
          <button className="btn" onClick={() => handleNumberClick("1")}>
            1
          </button>
          <button className="btn" onClick={() => handleNumberClick("2")}>
            2
          </button>
          <button className="btn" onClick={() => handleNumberClick("3")}>
            3
          </button>
          <button className="btn operator">+</button>
          <button className="btn zero" onClick={() => handleNumberClick("0")}>
            0
          </button>
          <button className="btn" onClick={() => handleNumberClick(".")}>
            .
          </button>
          <button className="btn operator">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
