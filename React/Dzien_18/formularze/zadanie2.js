// App.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import AdultStuff from './AdultStuff';

function App() {
    return <AdultStuff />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// AdultStuff.js

import React, {Component, useState } from "react";
import ReactDOM from "react-dom";

function AdultStuff() {

  const [inputVal, setInput] = useState(0);

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  return (
    <form>
      <input value={inputVal} onChange={handleInput} type="number" />
      <AdultStuffBox age={inputVal}></AdultStuffBox>
    </form>
  )

}

export default AdultStuff;

// AdultStuffBox.js

import React, {Component, useState } from "react";
import ReactDOM from "react-dom";

function AdultStuffBox(props) {

  return (
    <>
      { props.age >= 18 && <p>Lorem ipsum, treść dla pełnoletnich.</p> }
      { props.age < 18 && null }
    </>
  )

}

export default AdultStuff;
