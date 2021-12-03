import React from "react";
import ReactDOM from "react-dom";

import person from './data/person';

ReactDOM.render(
  <ul>
    <li>{ person.title }</li>
    <li>{ person.name }</li>
    <li>{ person.surname }</li>
    <li>{ person.age }</li>
  </ul>,
  document.getElementById("app")
);
