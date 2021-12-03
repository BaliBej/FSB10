import React from "react";
import ReactDOM from "react-dom";

const Sum = (props) => {
    return <h1>{ props.numbers.reduce((acc, next) => acc + next) }</h1>;
}

ReactDOM.render(
  <Sum numbers={[4, 10, 12, 18]} />,
  document.getElementById("app")
);
