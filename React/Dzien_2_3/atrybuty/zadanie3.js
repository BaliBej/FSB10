import React from "react";
import ReactDOM from "react-dom";

const commonStyle = {
  height: "100px"
};

const redDiv = <div style={{ ...commonStyle, background: "red" }} />;
const greenDiv = <div style={{ ...commonStyle, background: "green" }} />;
const blueDiv = <div style={{ ...commonStyle, background: "blue" }} />;

ReactDOM.render(
  <>
    {redDiv}
    {greenDiv}
    {blueDiv}
  </>,
  document.getElementById("app")
);
