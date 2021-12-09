// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import HelloWorld from './HelloWorld';

function App() {
    return <HelloWorld />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// HelloWorld.js

import React from 'react';

class HelloWorld extends React.Component {

    constructor() {
        console.log('constructor');
        super();
        this.state = {
            myText: "Hello World!",
        }
    }

    componentDidMount() {
        console.log('didmount-zamontowany')
        this.myTimeoutID = setTimeout(() => {
            this.setState({
                myText: 'Hi, Everyone!'
            });
        }, 5000);
    }

    shouldComponentUpdate() {
        console.log('should update');
        return true;
    }

    render() {
        console.log('render');
        return <h1>{ this.state.myText }</h1>
    }

    componentDidUpdate() {
        console.log('did update');
    }

    componentWillUnmount() {
        console.log('unmount');
        clearTimeout(this.myTimeoutID);
    }

}

export default HelloWorld;
