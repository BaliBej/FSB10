// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import Hello from './Hello';

function App() {
    return <Hello />;
}

ReactDOM.render(<App/>, document.getElementById("app"));

// Hello.js

import React, { useState } from 'react';

function Hello() {

    const [name, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    return (
        <form>
            <input type="text" value={name} onChange={handleInput} />
            <h1>{ name }</h1>
        </form>
    );
}

export default Hello;
