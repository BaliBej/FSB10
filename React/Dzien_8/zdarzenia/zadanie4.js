// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import EventTest from "./EventTest";

class App extends Component {
    render() {
        return <EventTest />
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));

// EventTest.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

class EventTest extends Component {
    handleClick() {
        console.log('Kliknięto przycisk!');
    }

    handleHover() {
        console.log('Najechano na przycisk!');
    }

    handleLeave() {
        console.log('Opuszczono przycisk!');
    }

    render() {
        return (
            <div style={{ width: '100px', height: '100px', background: 'red' }} onClick={() => this.handleClick()} onMouseEnter={() => this.handleHover()} onMouseLeave={() => this.handleLeave()}>
            </div>
        )
    }
}

export default EventTest;
