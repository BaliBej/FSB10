// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import ShowUserClass from "./ShowUserClass";
import ShowUserFunc from "./ShowUserFunc";

class App extends Component {
    render() {
        return (
            <>
                <ShowUserClass />
                <ShowUserFunc />
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));

// ShowUserClass.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

class ShowUserClass extends React.Component {

    showUserData() {
        console.log(this.props.name, this.props.surname);
    }

    // Opcja 2
    // showUserData = () => {
    //     console.log(this.props.name, this.props.surname);
    // W renderze onClick={this.showUserData}
    // }

    // Opcja 3
    // W renderze onClick={this.showUserData.bind(this)}

    render() {
        return <button onClick={() => this.showUserData()}>Dane użytkownika</button>
    }
}

export default ShowUserClass;

// ShowUserFunc.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

function ShowUserFunc(props) {
    function showUserData() {
        console.log(props.name, props.surname);
    }

    return <button onClick={showUserData}>Dane użytkownika</button>
}

export default ShowUserFunc;
