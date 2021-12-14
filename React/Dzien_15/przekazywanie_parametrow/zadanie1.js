// app.js

import React, {Component, useState } from "react";
import ReactDOM from "react-dom";

import Bulb from './Bulb';

function App() {
    return <Bulb />;
}

ReactDOM.render(<App />, document.getElementById("app"));

// Bulb.js

import React, { useState } from 'react';

function Bulb() {

    const [ isOn, setIsOn ] = useState(false);

    const handleClick = (value) => {
        setIsOn(value);
    }

    return <div onClick={() => handleClick(!isOn)} style={{ width: '100px', height: '100px', background: isOn ? 'yellow' : 'white' }}>{ isOn ? 'Off' : 'On' }</div>

}

export default Bulb;
