// app.js

import React from "react";
import ReactDOM from "react-dom";

import ColorfulBoxes from './ColorfulBoxes';

function App() {
    return <ColorfulBoxes />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// ColorfulBoxes.js

import React, { useState } from 'react';

function ColorfulBoxes() {

    const [ boxes, setBoxes ] = useState([]);

    const addBox = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setBoxes([...boxes, { color: randomColor }]);
    }

    return (
        <div>
            <button onClick={addBox}>Add box</button>
            <div>
                {boxes.map((box, index) => (
                    <div key={index} style={{ width: '200px', height: '200px', backgroundColor: box.color }}>
                        Box {index + 1}
                    </div>
                ))}
            </div>
        </div>
    );

}


export default ColorfulBoxes;
