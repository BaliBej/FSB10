// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import PassParameter from './PassParameter';

function App() {
  return <PassParameter />
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);

// PassParameter.js

import React, { useState} from 'react';

function PassParameter() {

    const handleClickButton = (e, txt) => {
        e.preventDefault();
        console.log(txt);
    }

    return (
        <a onClick={(e) => handleClickButton(e, 'Hello World')}>Klik</a>
    )

}

export default PassParameter;
