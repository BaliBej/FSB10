// app.js

import React from "react";
import ReactDOM from "react-dom";

import NumberInfo from './NumberInfo';

function App() {
    return <NumberInfo number={5} />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// NumberInfo.js

import React, { useState } from 'react';

function NumberInfo() {

    return (
        <>
            <ul>
                <li>Liczba: {this.props.number}</li>
                {/* Uproszczenie */}
                <li>Liczba jest parzysta: {this.props.number % 2 === 0 ? 'Tak' : 'Nie'}</li>
                { this.props.number % 2 !== 0 && this.props.number % 3 !== 0 && this.props.number % 5 !== 0 && <li>Liczba pierwsza</li> }
                {/* Właściwie */}
                {/* const isPrime = num => {
                        for(let i = 2; i < num; i++)
                        if(num % i === 0) return false;
                        return num > 1;
                } */}
                {/* Uproszczenie */}
                { this.props.number % 2 === 0 && this.props.number % 4 === 0 && <li>Potęga liczby 2</li> }
                {/* Właściwie Math.log2(x) % 1 === 0; */}
            </ul>
        </>
    )

}


export default NumberInfo;
