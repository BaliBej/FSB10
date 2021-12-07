// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import RandomNumbers from './RandomNumbers';

function App() {
    return <RandomNumbers />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// RandomNumbers.js

import React, {Component} from "react";

class RandomNumbers extends React.Component {

    state = {
        numbers: [],
    }

    handleClick = () => {
        // generate random number from 100 to 999
        const randomNumber = Math.floor(Math.random() * (999 - 100 + 1)) + 100;

        this.setState({
            numbers: [...this.state.numbers, randomNumber];
        });
    }

    render() {
        return (
            <>
                <button onClick={() => this.handleClick()}>Wylosuj liczbę</button>
                <ul>
                    { this.state.numbers.map(number => <li>{ number}</li>)}
                </ul>
            </>
        )
    }

}

export default RandomNumbers;
