// app.js

import React from "react";
import ReactDOM from "react-dom";

import CustomTitle from './CustomTitle';

function App() {
    return <CustomTitle />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// CustomTitle.js

import React, { useState, useEffect } from 'react';

function CustomTitle() {

    const [ counter, setCounter ] = useState(1);

    useEffect(() => {
        document.title = `Counter: ${counter}`
    }, [counter]);

    const handleClick = () => {
        setCounter(prevState => prevState + 1);
    }

    return <p onClick={handleClick} style={{ fontSize: `${counter * 1.2}rem`}}>Kliknięto mnie juz { counter } razy</p>

}

export default CustomTitle;
