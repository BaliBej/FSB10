// app.js

import React from "react";
import ReactDOM from "react-dom";

import UpperLower from './UpperLower';

function App() {
    return <UpperLower />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// UpperLower.js

import React, { useState } from 'react';

function UpperLower() {

    const [ text, setText ] = useState('Ala ma kota');

    const makeUpper = () => {
        setText(prevState => prevState.toUpperCase());
    }

    const makeLower = () => {
        setText(prevState => prevState.toLowerCase());
    }

    return (
        <>
            <h2>{ text }</h2>
            <button onClick={makeUpper}>Uppercase</button>
            <button onClick={makeLower}>Lowercase</button>
        </>
    )

}


export default UpperLower;
