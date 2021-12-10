// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import StrobeLight from './StrobeLight';

function App() {
    return (
        <div>
            <StrobeLight color="orange" frequency={800} />
            <StrobeLight color="red" frequency={80} />
            <StrobeLight color="green" frequency={8000} />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));

// StrobeLight.js

import React from 'react';

class StrobeLight extends React.Component {

    constructor() {
        super();
        this.state = {
            color: "white",
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ color: this.state.color === "white" ? this.props.color : "white" });
        }, this.props.frequency);
    }

    render() {
        return <div style={{ width: '500px', height: '50px', background: this.state.color }}></div>
    }

}

export default StrobeLight;
