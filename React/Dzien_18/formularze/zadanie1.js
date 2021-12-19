// App.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import PESELInput from './PESELInput';

function App() {
    return <PESELInput />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// PESELInput.js

import React, {Component, useState } from "react";
import ReactDOM from "react-dom";

function PESELInput() {

  const [inputVal, setInputVal] = useState("");
  const [validationResult, setValidation] = useState(null);

  const handleInput = (e) => {
    setInputVal(e.target.value);

    const isNumber = /^\d+$/.test(e.target.value);
    const isLength = e.target.value.length === 11;

    setValidation(isNumber && isLength);
  }

  return (
    <form>
      <input value={inputVal} onChange={handleInput} />
      <div>
        { validationResult === true && <input type="submit" value="Prześlij" />}
        { validationResult === false && <h1>Niepoprawny numer PESEL</h1>}
      </div>
    </form>
  )

}

export default PESELInput;
