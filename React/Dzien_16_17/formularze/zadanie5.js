// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import SelectOrType from './SelectOrType';

function App() {
    return <SelectOrType items={['BMW', 'Jaguar', 'Porsche']} />;
}

ReactDOM.render(<App/>, document.getElementById("app"));

// SelectOrType.js

import React, { useState } from 'react';

function SelectOrType(props) {
    const [selectedVal, setSelectedVal] = useState("");
    const [extraElement, setExtraElement] = useState("inne");

    const handleChange = (e) => {
        setSelectedVal(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        const input = document.querySelector("input");
        setExtraElement(input.value);
        setSelectedVal(input.value);
        input.value = "";
    };

    return (
        <form>
        <select value={selectedVal} onChange={handleChange}>
            {[...props.items, extraElement].map((item) => {
            return <option key={item}>{item}</option>;
            })}
        </select>
        {selectedVal === extraElement && <input type="text" />}
        {selectedVal === extraElement && (
            <button onClick={handleClick}>Zamień</button>
        )}
        </form>
    );
}

export default SelectOrType;
