// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import TextField from './TextField';

function App() {
    return <TextField />;
}

ReactDOM.render(<App/>, document.getElementById("app"));

// TextField.js

import React, { useState } from 'react';

function TextField() {

    const [selectedCar, setCar] = useState('BMW');

    const handleSelect = (e) => {
        setCar(e.target.value);
    }

    return (
        <div>
            <p>{ selectedCar }</p>
            <select value={selectedCar} onChange={handleSelect}>
                <option>Jaguar</option>
                <option>BMW</option>
                <option>Audi</option>
                <option>McLaren</option>
            </select>
            <span>{ selectedCar.length }</span>
        </div>
    );
}

export default TextField;
