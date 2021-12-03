import React from "react";
import ReactDOM from "react-dom";

const borderColor = prompt("Podaj kolor obramowania");

let renderedDiv;

if (['red', 'green', 'blue'].includes(borderColor)) {
    renderedDiv = <div style={{ borderColor: borderColor, width: '100px', height: '100px', borderWidth: '5px', borderStyle: 'solid' }}></div>;

} else {
    renderedDiv = <div>Nieprawidłowy kolor</div>;
}

ReactDOM.render(
  renderedDiv,
  document.getElementById("app")
);
