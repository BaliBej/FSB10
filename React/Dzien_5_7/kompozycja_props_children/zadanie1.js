import React from "react";
import ReactDOM from "react-dom";

function ParentComponent(props) {
    return <ChildComponent>{props.children}</ChildComponent>;
}

function ChildComponent(props) {
    return <GrandchildComponent>{props.children}</GrandchildComponent>;
}

function GrandchildComponent(props) {
    return <>{props.children}</>;
}

ReactDOM.render(
    <ParentComponent>
        <h1>To działa!</h1>
    </ParentComponent>,
    document.getElementById("app")
);
