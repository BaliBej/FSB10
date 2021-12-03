import React from "react";
import ReactDOM from "react-dom";

const Hello = (props) => {
    return <h1>Hello, {props.name} {props.surname}</h1>
}

class Hello extends React.Component {
    render() {
        return <h1>Hello, {this.props.name} {this.props.surname}</h1>
    }
}

ReactDOM.render(
  <Hello name="Marceli" surname="Olszewski" />,
  document.getElementById("app")
);
