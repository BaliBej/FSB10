// app.js

import React from "react";
import ReactDOM from "react-dom";

import Box from './Box';

function App() {
    return <Box />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// Box.js

import React, { useState, useEffect } from 'react';

function Box() {

    const [ color, setColor ] = useState('cornflowerblue');

    useEffect(() => {
        setTimeout(() => {
            setColor('tomato');
        }, 2000);
    }, []);

    return <div style={{ width: '100px', height: '100px', background: color }}></div>

}

export default Box;
