// app.js

import React from "react";
import ReactDOM from "react-dom";

import Numbers from './Numbers';

function App() {
    return <Numbers />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// Numbers.js

import React, { useState } from 'react';

function Numbers() {

    const initialState = [54,76,24,63,4,54,82,36,13,80,10,69,4,23,40];

    const [numbers, setNumbers] = useState(initialState);

    const showAll = () => {
        setNumbers(initialState);
    }

    const showEven = () => {
        const evenNumbers = numbers.filter(number => number % 2 === 0);
        setNumbers(evenNumbers);
    }

    const showOdd = () => {
        const oddNumbers = numbers.filter(number => number % 2 !== 0);
        setNumbers(oddNumbers);
    }

    return (
        <>
            <ul>
                { numbers.map(number => <li key={number}>{number}</li>) }
            </ul>
            <button onClick={showAll}>Pokaż tylko parzyste</button>
            <button onClick={showEven}>Pokaż tylko parzyste</button>
            <button onClick={showOdd}>Pokaż tylko parzyste</button>
        </>
    )

}


export default Numbers;
