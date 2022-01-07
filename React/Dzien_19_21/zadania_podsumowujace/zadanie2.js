// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import Notes from './Notes';

function App() {
  return <Notes />;
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);

// Notes.js

import React, {Component, useState} from "react";
import ReactDOM from "react-dom";

function Notes() {

  const [inputValue, setInput] = useState('');

  const handleInput = (e) => {
      e.preventDefault();

      setInput(e.target.value);
  }

  const clearInput = () => {
        setInput('');
  }

  return (
      <form>
          <textarea value={inputValue} onChange={handleInput}></textarea>
          <button onClick={clearInput}>Wyczyść</button>
          <span>{ inputValue }</span>
      </form>
  )

}

export default Notes;
