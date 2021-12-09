// app.js

import React from "react";
import ReactDOM from "react-dom";

import SecretStuff from './SecretStuff';

function App() {
    return <SecretStuff password="123" correctPassword="123" secret="Łubudubu" />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// SecretStuff.js

import React, { useState } from 'react';

function SecretStuff() {

    return (
        <>
            { props.password === props.correctPassword ? <div>{ props.secret }</div> : null }
        </>
    )

}


export default SecretStuff;
