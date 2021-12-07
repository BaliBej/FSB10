// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import HoverEvent from "./HoverEvent";

class App extends Component {
    render() {
        return <HoverEvent />
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));

// HoverEvent.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

class HoverEvent extends Component {
    handleHover() {
        console.log('Najechano na przycisk!');
    }

    render() {
        return <button onMouseEnter={() => this.handleHover()}>Klik klik</button>;
    }
}

export default HoverEvent;
