import React, {Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";

function App() {

    const [ pokemons, setPokes ] = useState(null);

    useEffect(() => {

        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(data => {
                setPokes(data.results);
            });

    }, []);

    return (
        <>
            { pokemons ? (
                <ul className="list">
                    { pokemons.map(poke => {
                        return <li key={poke.name}>{poke.name}</li>
                    })}
                </ul>
            ) : <span>Loading...</span>}
        </>
    )

}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
