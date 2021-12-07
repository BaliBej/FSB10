// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import CurrentDate from './CurrentDate';

function App() {
    return <CurrentDate />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// CurrentDate.js

import React, {Component} from "react";

class CurrentDate extends React.Component {

    state = {
        date: new Date()
    }

    handleClick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <>
                <button onClick={() => this.handleClick()}>Zaktualizuj datę</button>
                <h1>{ this.state.date.toString() }</h1>
                {/* this.state.date.getYear() this.state.date.getMonth() */}
            </>
        )
    }

}

export default CurrentDate;
