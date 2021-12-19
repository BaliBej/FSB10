// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import AddTwoNumbers from './AddTwoNumbers';

function App() {
    return <AddTwoNumbers />;
}

ReactDOM.render(<App/>, document.getElementById("app"));

// AddTwoNumbers.js

import React, { Component } from 'react';

class AddTwoNumbers extends React.Component {

    constructor() {
        super();
        this.state = {
            numA: 0,
            numB: 0,
        }
    }

    handleChangeA = (e) => {
        this.setState({
            numA: e.target.value
        });
    }

    handleChangeB = (e) => {
        this.setState({
            numB: e.target.value
        });
    }

    render() {
        const { numA, numB } = this.state;
        return (
            <form>
                <input type="text" value={this.state.numA} onChange={(e) => this.handleChangeA(e)} />
                <input type="text" value={this.state.numB} onChange={(e) => this.handleChangeB(e)} />
                <h1>{ isNaN(numA) || isNaN(numB) ? 'Podaj dwie liczby' : numA + numB }</h1>
            </form>
        )
    }

}

export default AddTwoNumbers;
