// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import Form from './Form';

function App() {
    return <Form />;
}

ReactDOM.render(<App/>, document.getElementById("app"));

// Form.js

import React, { useState } from 'react';

import FakeAPI from "./data/fakeAPI";

function Form() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState(null);


    const handleLogin = e => {
        setLogin(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleForm = e => {
        if (login.length <= 2) {
            setError('Login musi mieć więcej niż 2 znaki');
            return;
        }

        if (password.length <= 4) {
            setError('Hasło musi mieć więcej niż 4 znaki');
            return;
        }

        FakeAPI.login({
            username: login,
            password: password
          }).then(user => {
            setUserData(user);
          }).catch(err => {
            setError(err);
          });
    }

    return (
        <>
        { !userData && <form>
            <input type="text" value={login} onChange={handleLogin} />
            <input type="text" value={password} onChange={handlePassword} />
            <button onClick={handleForm}>Zaloguj</button>
        </form> }
        { userData && <h1>Dane użytkownika {userData.name} {userData.surname}</h1> }
        { error && <h1>{ error }</h1>}
        </>
    );
}

export default Form;
