// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import MathQuestionGame from './MathQuestionGame';

function App() {
  return <MathQuestionGame />;
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);

// MathQuestionGame.js

import React, { useState, useEffect } from 'react';

function MathQuestionGame() {

    const operations = ['+', '-', '*', '/'];

    const [ numA ] = useState(Math.floor(Math.random() * (10 - 1) + 1));
    const [ numB ] = useState(Math.floor(Math.random() * (10 - 1) + 1));
    const [ operation ] = useState(operations[Math.floor(Math.random()*operations.length)]);

    const [ answer, setAnswer ] = useState(null);

    const [ answers, setAnswers ] = useState([]);

    const [time, setTime] = useState(10);

    const [ isWinner, setIsWinner ] = useState(null);

    const calculateResult = () => {
        switch (operation) {
            case '+':
                return numA + numB;
            case '-':
                return numA - numB;
            case '*':
                return numA * numB;
            case '/':
                return numA / numB;
            default:
                return 0;
        }
    }

    const shuffle = (a) => {
        for (let i = a.length; i; i--) {
          let j = Math.floor(Math.random() * i);
          [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }

        return a;
    }

    useEffect(() => {
        const result = calculateResult();
        setAnswer(result);

        const proposedAnswers = [result];
        while (proposedAnswers.length < 4) {
            const newAnswer = Math.floor(Math.random() * (10 - 0) + 0);
            if (!proposedAnswers.includes(newAnswer)) {
                proposedAnswers.push(newAnswer);
            }
        }

        setAnswers(shuffle(proposedAnswers));

        const interval = setInterval(() => {
            setTime(time => time - 1);
        }
        , 1000);

        // componentWillUnmount
        return () => clearInterval(interval);
    }, []);

    const handleClick = (e) => {
        if (Number(e.target.innerText) === answer) {
            setIsWinner(true);
        } else {
            setIsWinner(false);
        }
    }

    return (
        <div>
            { isWinner === true ? <h1>Gratulacje</h1> : isWinner === false ? <h1>Błędna odpowiedź</h1> : null }
            { time <= 0 && isWinner === null ? <h1>Koniec czasu</h1> : null }
            <h1>{numA} {operation} {numB} =</h1>
            <div>
                {answers.map((answer, index) => {
                    return <button onClick={handleClick} disabled={time <= 0} key={index}>{ answer}</button>
                })}
            </div>
            <h3>00:{time >= 0 ? time : 0}</h3>
        </div>
    )

}

export default MathQuestionGame;
