import React from "react";
import ReactDOM from "react-dom";

function calculate(numA, numB, operation) {
  switch(operation) {
    case '+':
      return parseFloat(numA) + parseFloat(numB);
    case '-':
      return parseFloat(numA) - parseFloat(numB);
    case '*':
      return parseFloat(numA) * parseFloat(numB);
    case '/':
      return parseFloat(numA) / parseFloat(numB);
  }
}

ReactDOM.render(
  <div>{ calculate(5, 6, '+') }</div>,
  document.getElementById("app")
);
