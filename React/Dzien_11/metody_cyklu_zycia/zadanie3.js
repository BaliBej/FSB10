// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import Box from './Box';

function App() {
    return <Box />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// Box.js

import React from 'react';

class Box extends React.Component {

    constructor() {
        super();
        this.state = {
            color: "green",
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({color: this.state.color === "green" ? "red" : "green"});
        }, 1000);
    }

    render() {
        return <div style={{ width: '100px', height: '100px', background: this.state.color }}></div>
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

}

export default Box;
