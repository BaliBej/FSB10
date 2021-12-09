// app.js

import React from "react";
import ReactDOM from "react-dom";

import NumberRandomInfo from './NumberRandomInfo';

function App() {
    return <NumberRandomInfo />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// NumberRandomInfo.js

import React, { useState } from 'react';

function NumberRandomInfo() {

    const [ number, setNumber ] = useState(0);

    setInterval(() => {
        setNumber(Math.ceil(Math.random() * 5));
    }, 1000);

    return (
        <>
            <p>{ number >= 3 ? `${number} Wieksza lub rowna 3` : `${number} Mniejsza od 3`}</p>
        </>
    )

}


export default NumberRandomInfo;
