// app.js

import React from "react";
import ReactDOM from "react-dom";

import StopWatch from './StopWatch';

function App() {
    return <StopWatch />;
}

ReactDOM.render(<App/>, document.getElementById("app"));

// StopWatch.js

import React, { useState, useEffect } from 'react';

let interval;

function StopWatch() {

    const [ time, setTime ] = useState(0);
    const [ laps, setLaps ] = useState([]);
    const [ isRunning, setIsRunning ] = useState(false);

    useEffect(() => {
        if (isRunning) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);

    } , [isRunning]);

    const handleLap = () => {
        setLaps([...laps, time]);
    }

    const handleRestart = () => {
        setTime(0);
        setLaps([]);
    }

    return (
        <>
            <h1>Time {time} s</h1>
            <button onClick={handleLap}>Lap</button>
            <button onClick={() => setIsRunning(false)}>Stop</button>
            <button onClick={handleRestart}>Restart</button>
            <button onClick={() => setIsRunning(true)}>Start</button>
            <h2>Laps: </h2>
            <ul>
                {laps.map((lap, index) => <li key={index}>{lap}</li>)}
            </ul>
        </>
    )

}

export default StopWatch;
