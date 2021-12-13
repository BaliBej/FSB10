import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function PropsToState(props) {
  const [ text, setText ] = useState(props.text);

  useEffect(() => {
    setInterval(() => {
      setText(prevText => prevText + ".");
    }, 1000);
  }, []);

  return <ShowInfo text={text} />;
}

function ShowInfo(props) {
  return <h1>{ props.text }</h1>;
}

function App() {
  return <PropsToState text="Witaj świecie!" />;
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
