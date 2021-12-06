import React from "react";
import ReactDOM from "react-dom";

const shopItemsData = [
    {
        title: "Mysz komputerowa",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg"
    },
    {
        title: "Klawiatura",
        image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png"
    },
    {
        title: "Laptop programisty",
        image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg"
    }
];

function ShopItemHeader(props) {
    return (
        <header>
            { props.children }
        </header>
    )
}

function ShopList(props) {
    return (
        <div className="shoplist">
            { props.data.map(item => {
                return (
                    <ShopItemHeader>
                        <h1>{ item.title }</h1>
                        <img src={ item.image } />
                    </ShopItemHeader>
                )
            })}
        </div>
    )
}

function App() {
    return <ShopList data={shopItemsData} />;
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
