// app.js

import React from "react";
import ReactDOM from "react-dom";

import Clock from './Clock';

function App() {
    return <Clock />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// Clock.js

import React, { useState, useEffect } from 'react';

import ClockTime from './ClockTime';
import ClockDate from './ClockDate';

function Clock() {

    const [ time , setTime ] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <ClockTime time={time} />
            <ClockDate time={time} />
        </>
    );

}

export default Clock;

// ClockTime.js

import React, { useState, useEffect } from 'react';

function ClockTime(props) {

    return <p>{ props.time.toLocaleTimeString() }</p>

}

export default ClockTime;

// ClockDate.js

import React, { useState, useEffect } from 'react';

function ClockDate(props) {

    return <p>{ props.time.toLocaleDateString() }</p>

}

export default ClockDate;
