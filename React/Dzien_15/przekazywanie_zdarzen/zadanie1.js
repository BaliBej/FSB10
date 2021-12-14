// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import ButtonCounter from './ButtonCounter';

function App() {
    return <ButtonCounter />;
}

ReactDOM.render(<App/>, document.getElementById("app"));

// ButtonCounter.js

import React, { useState } from 'react';

import ButtonToClick from './ButtonToClick';

function ButtonCounter() {

    const [ counter, setCounter ] = useState(0);

    const handleCounter = () => {
        setCounter(counter => counter + 1);
    }

    return (
        <>
            <h1>{ counter }</h1>
            <ButtonToClick onCounterIncrease={handleCounter} />
            <ButtonToClick onCounterIncrease={handleCounter} />
        </>
    )

}

export default ButtonCounter;

// ButtonToClick.js

import React, { useState } from 'react';

function ButtonToClick(props) {

    return <button onClick={() => props.onCounterIncrease()}>Zwiększ</button>

}

export default ButtonToClick;
