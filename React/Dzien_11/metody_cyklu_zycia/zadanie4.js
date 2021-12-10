// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import Modal from './Modal';

function App() {
    return (
        <div>
            <h1>Test okna modalowego</h1>
            <Modal heading="Zapisz się do newslettera" />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));

// Modal.js

import React from 'react';

class Modal extends React.Component {

    constructor() {
        super();
        this.state = {
            modalOpen: false,
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({color: this.state.color === "green" ? "red" : "green"});
        }, 1000);
    }

    render() {
        if (this.state.modalOpen) {
            return <h2>{ this.props.heading }</h2>
        } else {
            return null;
        }
    }

}

export default Modal;
