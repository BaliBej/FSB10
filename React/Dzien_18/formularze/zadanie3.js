// App.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import DynamicLego from './DynamicLego';

function App() {
    return <DynamicLego />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// DynamicLego.js

import React, {Component, useState } from "react";
import ReactDOM from "react-dom";

function DynamicLego() {

  const [ bricks, setBricks ] = useState(0);

  const handleChange = e => {
    setBricks(Number(e.target.value));
  }

  return (
    <div>
      {/* <input defaultValue={bricks} onBlur={handleChange} /> */}
      <input value={bricks} onChange={handleChange} />
      <ul>
        { [...Array(bricks).keys()].map(lego => {
          return <li key={lego} style={{ background: 'red', height: '50px', width: `${(lego + 1) * 50}px`}}></li>
        })}
      </ul>
    </div>
  )

}

export default DynamicLego;
