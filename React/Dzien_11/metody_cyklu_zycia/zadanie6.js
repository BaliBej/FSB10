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

class Clock extends React.Component {

    state = {
        time: new Date(),
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1000);
    }

    render() {
        return (
            <>
                <ClockTime time={this.state.time} />
                <ClockDate time={this.state.time} />
            </>
        );
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

}

export default Clock;

// ClockTime.js

import React, { useState, useEffect } from 'react';

class ClockTime extends React.Component {

    render() {
        return <p>{ this.props.time.toLocaleTimeString() }</p>
    }

}

export default ClockTime;

// ClockDate.js

import React, { useState, useEffect } from 'react';

class ClockDate extends React.Component {

    render() {
        return <p>{ this.props.time.toLocaleDateString() }</p>
    }

}

export default ClockDate;
