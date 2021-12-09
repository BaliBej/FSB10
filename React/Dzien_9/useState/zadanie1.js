// app.js

import React from "react";
import ReactDOM from "react-dom";

import Counter from './Counter';

function App() {
    return <Counter />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// Counter.js

import React, { useState } from "react";

function Counter() {

    const [ counter, setCounter ] = useState(10);

    const addOne = () => {
        setCounter(counter + 1);
    }

    const minusOne = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(10);
    }

    return (
        <>
            <h2>Liczba kliknięć: { counter }</h2>
            <button onClick={addOne}>+</button>
            <button onClick={minusOne}>-</button>
            <button onClick={reset}>Reset</button>
        </>
    )

}

export default Counter;
