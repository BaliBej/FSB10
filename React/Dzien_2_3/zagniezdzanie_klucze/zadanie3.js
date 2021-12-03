import React from "react";
import ReactDOM from "react-dom";

import people from "./data/people";

ReactDOM.render(
  <>
    {people.map(person => (
        <div className="person" key={person.id}>
            <img src={person.avatar} alt={person.name} />
            <div className="info">
                <h1>{person.name} {person.surname}</h1>
                <p>{ person.bio }</p>
            </div>
        </div>
    ))}
  </>,
  document.getElementById("app")
);
