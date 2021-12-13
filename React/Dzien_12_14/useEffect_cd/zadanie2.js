import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

let interval;

function SpeedClickGame(props) {
  const [ time, setTime ] = useState(props.time);
  const [ lastTime, setLastTime ] = useState(props.time);
  const [ points, setPoints ] = useState(0);

  useEffect(() => {
    // Proof
    console.log(lastTime);

    setLastTime(prevTime => prevTime - 50);
    setTime(lastTime);

    clearInterval(interval);
    interval = setInterval(() => {
      setTime(prevTime => prevTime - 50);
    }, 50);

    return () => clearInterval(interval);
  }, [points]);

  const handleClick = () => {
    setPoints(prevPoints => prevPoints + 1);
  }

  return (
    <div>
      <h1>{ time >= 0 ? time : 0 }</h1>
      <h2>{ points }</h2>
      <button onClick={handleClick} disabled={time <= 0}>Click me</button>
    </div>
  )
}

function App() {
  return <SpeedClickGame time={2000} />;
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
