import React from "react";
import ReactDOM from "react-dom";

const LikeBox = (props) => {
    return (
        <div>
            <span>Licznik: { props.likes }</span>
            <button>Lubię to</button>
        </div>
    )
}

ReactDOM.render(
  <LikeBox likes={100} />,
  document.getElementById("app")
);
