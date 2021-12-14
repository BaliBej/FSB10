// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import AnotherColor from './AnotherColor';

function App() {
  return <AnotherColor />;
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);

// AnotherColor.js

import React, { useEffect, useState } from 'react';

function AnotherColor() {

    const [ color, setColor ] = useState('yellow');

    useEffect(() => {
        setTimeout(() => {
            setColor('blue');
        }, 5000);
    }, []);

    return <div style={{ width: '100px', height: '100px', background: color }}></div>

}

export default AnotherColor;
