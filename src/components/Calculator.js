import React from "react";
import Display from "./Display";

const Calculator = () => {
  return (
    <div className="calculator-container">
      <div className="calculator-wrapper">
        <Display />
        <div className="keypad-grid">
          <button className="btn">AC</button>
          <button className="btn">±</button>
          <button className="btn">%</button>
          <button className="btn operator">÷</button>
          <button className="btn">7</button>
          <button className="btn">8</button>
          <button className="btn">9</button>
          <button className="btn operator">×</button>
          <button className="btn">4</button>
          <button className="btn">5</button>
          <button className="btn">6</button>
          <button className="btn operator">-</button>
          <button className="btn">1</button>
          <button className="btn">2</button>
          <button className="btn">3</button>
          <button className="btn operator">+</button>
          <button className="btn zero">0</button>
          <button className="btn">.</button>
          <button className="btn operator">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
