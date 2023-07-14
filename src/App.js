import { useState } from "react";
import "./App.css";
const App = () => {
  const [result, setResult] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const handleCalculator = (char) => {
    if (char === "+") {
      setOperator("+");
      setFirstNumber(result);
      setResult("0");
    } else if (char === "-") {
      setOperator("-");
      setFirstNumber(result);
      setResult("0");
    } else if (char === "/") {
      setOperator("/");
      setFirstNumber(result);
      setResult("0");
    } else if (char === "x") {
      setOperator("x");
      setFirstNumber(result);
      setResult("0");
    } else if (char === "%") {
      setOperator("%");
      setFirstNumber(result);
      setResult("0");
    } else if (char === "=") {
      const secondNumber = result;
      if (operator === "+") {
        const total = +firstNumber + +secondNumber;
        setResult(total.toFixed());
      }
      if (operator === "-") {
        const total = +firstNumber - +secondNumber;
        setResult(total.toFixed());
      }
      if (operator === "/") {
        const total = +firstNumber / +secondNumber;
        setResult(total.toFixed());
      }
      if (operator === "x") {
        const total = +firstNumber * +secondNumber;
        setResult(total.toFixed());
      }
      if (operator === "%") {
        const total = +firstNumber % +secondNumber;
        setResult(total.toFixed(1));
      }
    } else if (char === "AC") {
      setResult("0");
    } else if (char === "1") {
      if (result === "0") {
        setResult(char);
      } else {
        setResult(result + char);
      }
    } else if (char === "2") {
      if (result === "0") {
        setResult(char);
      } else {
        setResult(result + char);
      }
    } else if (char === ".") {
      setResult(result + char);
    } else if (char === "3") {
      if (result === "0") {
        setResult(char);
      } else {
        setResult(result + char);
      }
    } else if (char === "4") {
      if (result === "0") {
        setResult(char);
      } else {
        setResult(result + char);
      }
    } else if (char === "5") {
      if (result === "0") {
        setResult(char);
      } else {
        setResult(result + char);
      }
    } else if (char === "6") {
      if (result === "0") {
        setResult(char);
      } else {
        setResult(result + char);
      }
    } else if (char === "7") {
      if (result === "0") {
        setResult(char);
      } else {
        setResult(result + char);
      }
    } else if (char === "8") {
      if (result === "0") {
        setResult(char);
      } else {
        setResult(result + char);
      }
    }
    if (char === "9") {
      if (result === "0") {
        setResult(char);
      } else {
        setResult(result + char);
      }
    } else if (char === "0") {
      if (result === "0") {
        setResult(char);
      } else {
        setResult(result + char);
      }
    } else if (char === "00") {
      if (result === "0") {
        setResult(char);
      } else {
        setResult(result + char);
      }
    } else if (char === "+/-") {
      if (result !== "0") {
        if (result.includes("-")) return setResult(result.replace("-", ""));
        return setResult("-" + result);
      }
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="display-content">{result}</div>
      </div>
      <div className="layout">
        <div
          onClick={() => {
            handleCalculator("AC");
          }}
          className="chars"
        >
          AC
        </div>
        <div
          onClick={() => {
            handleCalculator("+/-");
          }}
          className="chars"
        >
          +/-
        </div>
        <div
          onClick={() => {
            handleCalculator("%");
          }}
          className="chars"
        >
          %
        </div>
        <div
          onClick={() => {
            handleCalculator("/");
          }}
          className="col-orange chars"
        >
          /
        </div>
        <div
          onClick={() => {
            handleCalculator("7");
          }}
          className="bg-dark chars"
        >
          7
        </div>
        <div
          onClick={() => {
            handleCalculator("8");
          }}
          className="bg-dark chars"
        >
          8
        </div>
        <div
          onClick={() => {
            handleCalculator("9");
          }}
          className="bg-dark chars"
        >
          9
        </div>
        <div
          onClick={() => {
            handleCalculator("x");
          }}
          className="col-orange chars"
        >
          x
        </div>
        <div
          onClick={() => {
            handleCalculator("4");
          }}
          className="bg-dark chars"
        >
          4
        </div>
        <div
          onClick={() => {
            handleCalculator("5");
          }}
          className="bg-dark chars"
        >
          5
        </div>
        <div
          onClick={() => {
            handleCalculator("6");
          }}
          className="bg-dark chars"
        >
          6
        </div>
        <div
          onClick={() => {
            handleCalculator("-");
          }}
          className="col-orange chars"
        >
          -
        </div>
        <div
          onClick={() => {
            handleCalculator("1");
          }}
          className="bg-dark chars"
        >
          1
        </div>
        <div
          onClick={() => {
            handleCalculator("2");
          }}
          className="bg-dark chars"
        >
          2
        </div>
        <div
          onClick={() => {
            handleCalculator("3");
          }}
          className="bg-dark chars"
        >
          3
        </div>
        <div
          onClick={() => {
            handleCalculator("+");
          }}
          className="col-orange chars"
        >
          +
        </div>
        <div
          onClick={() => {
            handleCalculator("0");
          }}
          className="bg-dark chars"
        >
          0
        </div>
        <div
          onClick={() => {
            handleCalculator("00");
          }}
          className="bg-dark chars"
        >
          00
        </div>
        <div
          onClick={() => {
            handleCalculator(".");
          }}
          className="bg-dark chars"
        >
          .
        </div>
        <div
          onClick={() => {
            handleCalculator("=");
          }}
          className="col-orange chars"
        >
          =
        </div>
      </div>
    </div>
  );
};
export default App;
