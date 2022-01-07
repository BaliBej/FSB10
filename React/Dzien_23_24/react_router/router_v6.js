// kod w wersji 'routera' 6.x

import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

class Main extends Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}
class Contact extends Component {
  render() {
    return <h1>Contact us at contact@example.com</h1>;
  }
}
class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
