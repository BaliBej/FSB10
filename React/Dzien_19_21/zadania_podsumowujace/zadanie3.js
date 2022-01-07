// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import Register from './Register';

function App() {
  return <Register />;
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);

// Register.js

import React, {Component, useState} from "react";
import ReactDOM from "react-dom";

function Register() {

  const [validation, setValidation] = useState(null);

  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState(null);

  const handleEmailChange = e => {
    if (!e.target.value.includes("@")) {
      setEmailValidation("Email musi zawierać znak @");
    } else {
      setEmailValidation(null);
    }

    setEmail(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const formElements = e.target.elements;

    if (formElements[0].value.length < 5) {
      setValidation("Imię i nazwisko musi być dłuższe niż 5 znaków");
    } else if (!formElements[1].value.includes('@')) {
      setValidation("Email musi posiadać @");
    } else if (formElements[2].value.length < 4) {
      setValidation("Hasło musi być dłuższe niż 4 znaki");
    } else if (formElements[2].value !== formElements[3].value) {
      setValidation("Hasła muszą być identyczne");
    } else {
      setValidation(null);
    }

  }

  return (
    <>
      { validation && <h1>{ validation }</h1>}
      { emailValidation && <h1>{ emailValidation }</h1>}
      <form onSubmit={handleSubmit}>
        <h1>Dane osobowe</h1>
        <input placeholder="Imię i nazwisko" type="text" />
        <input value={email} onChange={handleEmailChange} placeholder="Email" type="email" />
        <input placeholder="Hasło" type="password" />
        <input placeholder="Powtórz hasło" type="password" />
        <select>
          <option>Mężczyzna</option>
          <option>Kobieta</option>
        </select>
        <button>Wyślij</button>
      </form>
    </>
  )

}

export default Register;
