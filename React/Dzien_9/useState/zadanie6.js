// app.js

import React from "react";
import ReactDOM from "react-dom";

import ToDoList from './ToDoList';

function App() {
    return <ToDoList />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// ToDoList.js

import React, { useState } from 'react';

function ToDoList() {

    const [ tasks, setTasks ] = useState([]);

    const addTask = () => {
        setTasks(prevState => [...prevState, `Zadanie ${prevState.length + 1}`]);
    }

    return (
        <>
            <ul>
                { tasks.map((task, index) => <li key={index}>{task}</li>) }
            </ul>
            <button onClick={addTask}>Dodaj zadanie</button>
        </>
    )

}


export default ToDoList;
