// app.js
import React, {Component} from "react";
import ReactDOM from "react-dom";

import LifeCyclesTester from './LifeCyclesTester';

function App() {
    return <LifeCyclesTester />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// LifeCyclesTester.js
import React from 'react';

class LifeCyclesTester extends React.Component {

    // Faza montowania
    constructor(props) {
        console.log('constructor');

        super(props);
        this.state = {
            counter: 0,
        }
    }

    componentDidMount() {
        console.log('component did mount');
        setInterval(() => {
            this.setState({
                counter: Math.random() * 10000
            })
        }, 1000);
        // timer, interval, fetch, modyfikacja drzewa DOM
    }

    handleClick() {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    // Faza aktualizacji
    // static getDerivedStateFromProps(props, state) {
    //     if (state.someKey === 'someValue') {
    //         return null;
    //     }
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        // if (nextState.someKey === 'someValue') {
        //     return false;
        // }

        return true;
    }

    render() {
        console.log('render');
        return (
            <>
                <p>{ this.state.counter }</p>
                <button onClick={() => this.handleClick()}>Klik</button>
            </>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    // Faza odmontowywania
    componentWillUnmount() {
        console.log('componentWillUnmount');
        // clearTimeout, clearInterval, zerwanie połączeń z zewnętrznymi zasobami
    }

}

export default LifeCyclesTester;
