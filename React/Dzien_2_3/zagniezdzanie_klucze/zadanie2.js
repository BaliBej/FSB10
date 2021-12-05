import React from "react";
import ReactDOM from "react-dom";

import people from "./data/people";

ReactDOM.render(
  <>
    <h1>{ people.title }{ people.firstName }{ people.lastName }</h1>
    <span>{ people.age }</span>
  </>,
  document.getElementById("app")
);
