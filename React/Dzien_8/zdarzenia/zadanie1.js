// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import Buttons from './Buttons';

function App() {
    return <Buttons />
}

ReactDOM.render(<App />, document.getElementById("app"));

// Buttons.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

function Buttons() {
    function handleButton1() {
        console.log('Pierwszy przycisk kliknięty');
    }

    function handleButton2() {
        const a = prompt('Podaj liczbę a');
        const b = prompt('Podaj liczbę b');

        console.log(a**b); // Math.pow(a, b);
    }

    function handleButton3() {
        console.log(window.innerWidth, window.innerHeight);
    }

    return (
        <>
            <button onClick={handleButton1}>Klik</button>
            <button onClick={handleButton2}>Klik</button>
            <button onClick={handleButton3}>Klik</button>
        </>
    )
}

export default Buttons;
