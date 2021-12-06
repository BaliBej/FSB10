import React, {Component} from "react";
import ReactDOM from "react-dom";

function ChatHeader(props) {
    return (
        <header>
            { props.children }
        </header>
    )
}

function ChatMessages(props) {
    return (
        <div>
            <ul>
                { props.children }
            </ul>
        </div>
    )
}

function ChatMessage(props) {
    return (
        <>
            { props.children }
        </>
    )
}

function NewChatMessage(props) {
    return (
        <footer>
            { props.children }
        </footer>
    )
}

function Chat() {
  return (
    <section className="chat">
        <ChatHeader>
        <h1>Chat prywatny</h1>
        </ChatHeader>
        <ChatMessages>
            <ChatMessage><li>Wpis z chatu 1</li></ChatMessage>
            <ChatMessage><li>Wpis z chatu 2</li></ChatMessage>
            <ChatMessage><li>Wpis z chatu 3</li></ChatMessage>
        </ChatMessages>
        <NewChatMessage>
        <form>
            <input type="text"/>
            <button>Wyślij</button>
        </form>
        </NewChatMessage>
    </section>
  );
}

function App() {
  return <Chat/>;
}

ReactDOM.render(
  <App/>,
  document.getElementById("app")
);
