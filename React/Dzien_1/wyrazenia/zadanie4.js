import React from "react";
import ReactDOM from "react-dom";

const numA = prompt('Podaj liczbę A');
const numB = prompt('Podaj liczbę B');
const operation = prompt('Podaj operację');

function calculate() {
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
  <div>{ calculate() }</div>,
  document.getElementById("app")
);
