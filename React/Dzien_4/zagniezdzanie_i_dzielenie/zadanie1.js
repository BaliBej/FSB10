import React, {Component} from "react";
import ReactDOM from "react-dom";

function CurrencyConverter({ from, to, value, rate }) {
    return (
        <div>
            <strong>{ value }</strong> { from } - <strong>{ (value * rate).toFixed(2) }</strong> { to}
        </div>
    )
}

function App() {
    return (
        <>
            <CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275} />
            <CurrencyConverter from="EUR" to="PLN" value={200} rate={4.70000} />
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));
