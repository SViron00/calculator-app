import React, { useState } from "react";
import Display from "./Display";
import Keypad from "./Keypad";

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState("");
  const [operator, setOperator] = useState(null);

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

  const handleOperator = (op) => {
    if (currentValue === "0") return;
    if (previousValue !== "") {
      handleEquals();
    }
    setPreviousValue(currentValue);
    setCurrentValue("0");
    setOperator(op);
  };

  const handleEquals = () => {
    if (!operator || !previousValue) return;

    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    let result;

    switch (operator) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "×":
        result = prev * current;
        break;
      case "÷":
        result = prev / current;
        break;
      default:
        return;
    }

    setCurrentValue(result.toString());
    setPreviousValue("");
    setOperator(null);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-wrapper">
        <Display
          currentValue={currentValue}
          previousValue={previousValue ? `${previousValue} ${operator}` : ""}
        />
        <Keypad
          onNumberClick={handleNumberClick}
          onOperatorClick={handleOperator}
          onClear={handleClear}
          onEquals={handleEquals}
        />
      </div>
    </div>
  );
};

export default Calculator;
