import React from "react";
import ReactDOM from "react-dom";

function genNumber() {
  return Math.round(Math.random() * 9 + 1);
}

const genNumA = genNumber();
const genNumB = genNumber();

const prediction = prompt(`Podaj wynik dodawania ${genNumA} + ${genNumB}`);

let renderedDiv;

if (prediction === (genNumA + genNumB)) {
    renderedDiv = <div style={{ background: 'green' }}>Odpowiedź poprawna</div>;
} else {
    renderedDiv = <div style={{ background: 'red' }}>Odpowiedź błędna</div>;
}

ReactDOM.render(
  renderedDiv,
  document.getElementById("app")
);
