// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import Box from './Box';

function App() {
  return <Box />
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);

// Box.js

import React, { useState} from 'react';

function Box() {

    const [ savedStyle, setSavedColor ] = useState({
        width: '500px',
        height: '200px',
        background: 'green'
    });

    const handleClick = (e, option) => {
        switch(option) {
            case 1: {
                setSavedColor({
                    width: '200px',
                    height: '300px',
                    background: 'orange'
                });
                break;
            }
            case 2: {
                setSavedColor({
                    width: '100px',
                    height: '700px',
                    background: 'blue'
                });
                break;
            }
            case 3: {
                setSavedColor({
                    width: '500px',
                    height: '200px',
                    background: 'green'
                });
                break;
            }
        }
    }

    return (
        <>
            <div style={savedStyle}></div>
            <button onClick={e => handleClick(e, 1)}>200x300</button>
            <button onClick={e => handleClick(e, 2)}>100x700</button>
            <button onClick={e => handleClick(e, 3)}>500x200</button>
        </>
    )

}

export default Box;
