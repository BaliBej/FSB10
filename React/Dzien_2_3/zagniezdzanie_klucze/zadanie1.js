import React from "react";
import ReactDOM from "react-dom";

import people from "./data/people";

ReactDOM.render(
  <>
    {people.map(person => (
        <div key={person.id}>
            <h1>{person.name} {person.surname}</h1>
        </div>
    ))}
  </>,
  document.getElementById("app")
);
