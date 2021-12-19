// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import CrazyDiv from './CrazyDiv';

function App() {
  return <CrazyDiv />
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);

// CrazyDiv.js

import React, { useState} from 'react';

function CrazyDiv() {

    const [leftVal, setLeft] = useState(0);
    const [topVal, setTop] = useState(0);

    handleHover = (from, to) => {
        setLeft(Math.floor(Math.random() * (to - from + 1)) + from);
        setTop(Math.floor(Math.random() * (to - from + 1)) + from);
    }

    return (
        <>
            <div onMouseEnter={() => handleHover(300, 600)} style={{ width: '100px', height: '100px', background: 'red', position: 'absolute', top: topVal, left: leftVal }}></div>
        </>
    )

}

export default CrazyDiv;
