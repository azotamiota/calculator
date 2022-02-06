import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';



const Calculator = () => {

const [currentCalc, setCalc] = useState('0')

const clearDisplay = () => {
  setCalc("0");
  
};
const updateDisplay = (event) => {
  console.log('currentCalc + event',currentCalc);
  if (currentCalc === "0") {
    setCalc(event);
  } else if (currentCalc.match(/\./)) {
      if (event !== ".") {
        setCalc(currentCalc + event)
      }
  }else {setCalc(currentCalc + event)}
};

  return (
    <>
      <button id="clear" onClick={clearDisplay}>
        AC
      </button>
      <button onClick={() => updateDisplay("0")} id="zero">
        0
      </button>
      <button id="one" onClick={() => updateDisplay("1")}>
        1
      </button>
      <button id="two" onClick={() => updateDisplay("2")}>
        2
      </button>
      <button onClick={() => updateDisplay("3")} id="three">
        3
      </button>
      <button onClick={() => updateDisplay("4")} id="four">
        4
      </button>
      <button onClick={() => updateDisplay("5")} id="five">
        5
      </button>
      <button onClick={() => updateDisplay("6")} id="six">
        {" "}
        6
      </button>
      <button onClick={() => updateDisplay("7")} id="seven">
        7
      </button>
      <button onClick={() => updateDisplay("8")} id="eight">
        8
      </button>
      <button onClick={() => updateDisplay("9")} id="nine">
        9
      </button>

      <button onClick={() => updateDisplay("+")} id="add">
        {" "}
        +
      </button>
      <button onClick={() => updateDisplay("-")} id="subtract">
        -
      </button>
      <button onClick={() => updateDisplay("*")} id="multiply">
        *
      </button>
      <button onClick={() => updateDisplay("/")} id="divide">
        /
      </button>

      <button onClick={() => updateDisplay(".")} id="decimal">
        .
      </button>

      <button id="equals">=</button>

      <div id="display">{currentCalc}</div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
