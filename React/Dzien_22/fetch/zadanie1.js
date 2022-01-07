// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import BookInfo from './BookInfo';

function App() {
  return <BookInfo isbn="0747532699" />
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);

// BookInfo.js

import React, {Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";

function BookInfo(props) {

  const [ title, setTitle ] = useState(null);

  useEffect(() => {

    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${props.isbn}`)
      .then(response => response.json())
      .then(data => {
        setTitle(data.items[0].volumeInfo.title);
      });

  }, []);

  return (
    <div>
      { title ? <h1>{ title }</h1> : null }
    </div>
  )

}

export default BookInfo;
