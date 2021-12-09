// app.js

import React from "react";
import ReactDOM from "react-dom";

import CountThings from './CountThings';

function App() {
    return <CountThings />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// CountThings.js

import React, { useState } from 'react';

function CountThings() {

    const [ balance, setBalance ] = useState(10000);
    const [ age, setAge ] = useState(20);

    const makeRicher = () => {
        setBalance(balance + 1000);
    }

    const makeOlder = () => {
        setAge(age + 1);
    }

    return (
        <div>
            <p>💰 so much money: { balance }</p>
            <p>Age: { age }</p>
            <button onClick={makeRicher}>Get rich</button>
            <button onClick={makeOlder}>Get older</button>
        </div>
    )

}


export default CountThings;
