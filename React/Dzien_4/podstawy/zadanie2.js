import React from "react";
import ReactDOM from "react-dom";

const LikeBox = () => {
    return (
        <div>
            <span>Licznik: 100</span>
            <button>Lubię to</button>
        </div>
    )
}

class LikeBox extends React.Component {
    render() {
        return (
            <div>
                <span>Licznik: 100</span>
                <button>Lubię to</button>
            </div>
        )
    }
}

ReactDOM.render(
  <LikeBox />,
  document.getElementById("app")
);
