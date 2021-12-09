// app.js

import React from "react";
import ReactDOM from "react-dom";

import MyButton from './MyButton';

function App() {
    return <MyButton />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// MyButton.js

import React, { useState } from 'react';

function MyButton() {

    const [ flag, setFlag ] = useState(false);

    return (
        <>
            <button onClick={() => setFlag(!flag)}>{ flag ? 'TAK' : 'NIE' }</button>
        </>
    )

}


export default MyButton;
