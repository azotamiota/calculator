import React, { useState } from "react";


const Calculator = () => {
  
  const [currentCalc, setCalc] = useState("0");
  const [isThisResult, setIsThisResult] = useState(false)
 
  const calculation = (event) => {
    if (currentCalc.length < 15) {
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
    } else if (currentCalc === "0" && event.match(/[0-9.]/)) {
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
  } else {
    console.log('now its over 15 digits');
    setCalc('too long number');
    // setTimeout(setCalc('0'), 1000)
  }
  };

  const clearDisplay = () => {
    setCalc("0");
    setIsThisResult(false);
  };

  const updateDisplay = (event) => {
    if (!isThisResult) {
      calculation(event);
    } else {
      if (event.match(/[+*/-]/)) {
        setCalc(currentCalc + event);
        setIsThisResult(false);

      } else {
        setCalc(event);
        setIsThisResult(false)       
      }
    }
  };

  const calculate = () => {
    const result = eval(currentCalc);
    setCalc(String(result));
    setIsThisResult(true);
  };
  return (
    <>
      <div id="container" className="rounded-3 mt-3 ms-auto me-auto">
        <div
          id="display"
          className="d-flex align-items-center justify-content-end m-2 ps-1 pe-1 rounded-2 text-break"
        >
          {currentCalc}
        </div>
        <section id="buttons-container" className="p-1 m-1 rounded-2">
          <div id="clear" onClick={clearDisplay} className="btn">
            AC
          </div>
          <div onClick={() => updateDisplay("/")} id="divide" className="btn">
            /
          </div>

          <div onClick={() => updateDisplay("*")} id="multiply" className="btn">
            x
          </div>

          <div onClick={() => updateDisplay("7")} id="seven" className="btn">
            7
          </div>
          <div onClick={() => updateDisplay("8")} id="eight" className="btn">
            8
          </div>
          <div onClick={() => updateDisplay("9")} id="nine" className="btn">
            9
          </div>

          <div onClick={() => updateDisplay("+")} id="add" className="btn">
            +
          </div>

          <div onClick={() => updateDisplay("4")} id="four" className="btn">
            4
          </div>

          <div onClick={() => updateDisplay("5")} id="five" className="btn">
            5
          </div>
          <div onClick={() => updateDisplay("6")} id="six" className="btn">
            6
          </div>

          <div onClick={() => updateDisplay("-")} id="subtract" className="btn">
            -
          </div>

          <div id="one" onClick={() => updateDisplay("1")} className="btn">
            1
          </div>

          <div id="two" onClick={() => updateDisplay("2")} className="btn">
            2
          </div>
          <div onClick={() => updateDisplay("3")} id="three" className="btn">
            3
          </div>

          <div
            id="equals"
            onClick={() => calculate()}
            className="btn d-flex justify-content-center align-items-center"
          >
            =
          </div>

          <div onClick={() => updateDisplay("0")} id="zero" className="btn">
            0
          </div>

          <div onClick={() => updateDisplay(".")} id="decimal" className="btn">
            .
          </div>
        </section>
      </div>
      <footer id="copyright">
        Designed and Coded By
        <br />
        <a href="https://azotamiota.github.io">azotamiota</a>
      </footer>
    </>
  );
};

export default Calculator;