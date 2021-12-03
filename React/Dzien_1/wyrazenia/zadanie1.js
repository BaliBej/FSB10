import React from 'react';
import ReactDOM from 'react-dom'

const numA = prompt('Liczba a:');
const numB = prompt('Liczba b:');

ReactDOM.render(
    <div>{ parseFloat(numA) + parseFloat(numB) }</div>,
    document.getElementById('app')
);
