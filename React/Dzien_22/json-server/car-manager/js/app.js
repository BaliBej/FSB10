import React, {Component} from "react";
import ReactDOM from "react-dom";

import CarsManager from './CarsManager';

function App() {

    return <CarsManager />

}

ReactDOM.render(<CarsManager />, document.getElementById("app"));
