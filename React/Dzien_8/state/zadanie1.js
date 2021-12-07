// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import TextTyper from './TextTyper';

function App() {
    return <TextTyper text="Witaj!" />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// TextTyper.js

import React from 'react';

class TextTyper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text[0],
            index: 1,
        }
    }

    handleNext() {
        if (this.state.index === this.props.text.length) {
            return;
        }

        this.setState({
            text: this.props.text.slice(0, this.state.index + 1),
            index: this.state.index + 1,
        })

        // this.setState({
        //     index: this.state.index + 1,
        // }, () => {
        //     this.setState({
        //         text: this.props.text.slice(0, this.state.index)
        //     })
        // })
    }

    handlePrev() {
        // jeśli W ma "ginąć" to <
        if (this.state.index <= 1) {
            return;
        }

        this.setState({
            text: this.props.text.slice(0, this.state.index - 1),
            index: this.state.index - 1,
        })
    }

    render() {
        return (
            <>
                <h1>{ this.state.text }</h1>
                <button onClick={() => this.handleNext()}>+</button>
                <button onClick={() => this.handlePrev()}>-</button>
            </>
        )
    }
}

export default TextTyper;
