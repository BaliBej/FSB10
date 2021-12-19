// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import ToDoList from './ToDoList';

function App() {
    return <ToDoList />;
}

ReactDOM.render(<App/>, document.getElementById("app"));

// ToDoList.js

import React, { useState } from 'react';

function ToDoList() {

    const [todos, setTodo] = useState([]);
    const [inputVal, setInput] = useState('');

    const handleInput = e => {
        setInput(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        setTodo((prevState) => [
            ...prevState,
            {
            id: todos.length + 1,
            name: inputVal,
            done: false
            }
        ]);
    };

    const makeDone = (id) => {
        const todosCpy = [...todos];
        todosCpy.forEach(todo => {
            if (todo.id === id) {
                todo.done = true;
            }
        });

        setTodo(todosCpy);
    }

    return (
        <div className="toDoList">
            <form className="header">
                <h2>Twoja lista zadań</h2>
                <input value={inputVal} onChange={handleInput} type="text" placeholder="np. Zrobić zakupy" />
                <button onClick={handleClick} className="btn-add">Dodaj</button>
            </form>

            <ul>
                { todos.map(todo => {
                    return <li className={todo.done ? 'done' : ''} onClick={() => makeDone(todo.id)} key={todo.id}>{ todo.name }</li>
                })}
            </ul>
        </div>
    )

}

export default ToDoList;
