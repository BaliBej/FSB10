// App.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import InteractiveDiv from './InteractiveDiv';

function App() {
    return <InteractiveDiv />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// InteractiveDiv.js

import React from 'react';

import useInput from './hooks/useInput';

function InteractiveDiv() {

    const [ elWidth, connectElWidth ] = useInput(100);

    return (
        <div>
            <input type="number" {...connectElWidth} />
            <div style={{ height: '100px', width: `${elWidth}px`, background: 'red'}}></div>
        </div>
    )

}

export default InteractiveDiv;

// useInput.js

import { useState } from 'react';

function useInput(initialValue) {

    const [ value, setValue ] = useState(initialValue);

    return [
        value,
        {
            value: value,
            onChange: e => {
                setValue(e.target.value)
            }
        }
    ]

}

export default useInput;
