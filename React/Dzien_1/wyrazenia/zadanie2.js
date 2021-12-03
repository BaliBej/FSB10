import React from 'react';
import ReactDOM from 'react-dom'

const birthYear = prompt('Podaj rok urodzenia');

ReactDOM.render(
    <h1>{ new Date().getFullYear - parseInt(birthYear) }</h1>,
    document.getElementById('app')
);
