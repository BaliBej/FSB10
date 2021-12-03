import React from "react";
import ReactDOM from "react-dom";

const AddNumbers = (props) => {
    return <h1>{ props.numberA + props.numberB }</h1>
}

class AddNumbers extends React.Component {
    render() {
        return <h1>{ this.props.numberA + this.props.numberB }</h1>
    }
}

ReactDOM.render(
  <AddNumbers numberA={5} numberB={10} />,
  document.getElementById("app")
);
