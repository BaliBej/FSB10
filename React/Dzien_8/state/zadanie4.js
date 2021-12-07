// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import MagicBox from './MagicBox';

function App() {
    return <MagicBox />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// MagicBox.js

import React, {Component} from "react";

class MagicBox extends React.Component {

    state = {
        color: '#000',
    }

    handleHover() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

        this.setState({
            color: randomColor,
        });
    }

    render() {
        return <div onMouseEnter={() => this.handleHover()} style={{backgroundColor: this.state.color}}></div>
    }

}

export default MagicBox;
