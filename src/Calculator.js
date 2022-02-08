import React, { useState } from "react";


const Calculator = () => {
  const [currentCalc, setCalc] = useState("0");

  const calculation = (event) => {
    if (
      event.match(/[+*/]/) &&
      currentCalc.slice(-1).match(/[+*/-]/) &&
      currentCalc.slice(-2, -1).match(/[0-9]/)
    ) {
      const choppedString = currentCalc.slice(0, currentCalc.length - 1);
      setCalc(choppedString + event);
    } else if (
      event.match(/[+*/-]/) &&
      currentCalc.slice(-1).match(/[+*/-]/) &&
      currentCalc.slice(-2, -1).match(/[+*/-]/)
    ) {
      const choppedString = currentCalc.slice(0, currentCalc.length - 2);
      setCalc(choppedString + event);
    } else if (currentCalc === "0" && event.match(/[0-9]/)) {
      setCalc(event);
    } else if (
      ((currentCalc || "").match(/\d\./g) || []).length >
      ((currentCalc || "").match(/[+*/-]/g) || []).length
    ) {
      if (event !== ".") {
        setCalc(currentCalc + event);
      }
    } else if (event === ".") {
      if (currentCalc.slice(-1).match(/[+*/-]/)) {
        setCalc(currentCalc + "0" + event);
      } else {
        setCalc(currentCalc + event);
      }
    } else {
      setCalc(currentCalc + event);
    }
  };

  const clearDisplay = () => {
    setCalc("0");
    document.getElementById("result-display").innerHTML = "";
  };
  const updateDisplay = (event) => {
    if (document.getElementById("result-display").innerHTML === "") {
      calculation(event);
    } else {
      if (event.match(/[0-9]/)) {
        document.getElementById("result-display").innerHTML = "";
        setCalc(event);
      } else {
        setCalc(document.getElementById("result-display").innerHTML);

        document.getElementById("result-display").innerHTML = "";

        calculation(event);
      }
    }
  };

  const calculate = () => {
    const result = eval(currentCalc);
    document.getElementById("result-display").innerHTML = result;
    setCalc(String(result));
  };
  return (
    <>
      <div id="container">
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

        <button id="equals" onClick={() => calculate()}>
          =
        </button>

        <div id="display">{currentCalc}</div>
        <div id="result-display"></div>
      </div>
    </>
  );
};

export default Calculator;