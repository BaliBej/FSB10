import React from "react";
import ReactDOM from "react-dom";

const shopItemData = {
    title: "MacBook Pro",
    image: "https://bit.ly/2EEtduD",
    description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
    price: 9999
}

function ShopItemHeader(props) {
    return (
        <header>
            { props.children }
        </header>
    )
}

function ShopItemDescription(props) {
    return (
        <article>
            { props.children }
        </article>
    )
}

function ShopItemPricing(props) {
    return (
        <footer>
            { props.children }
        </footer>
    )
}

function ShopItem({ data }) {
    return (
        <section>
            <ShopItemHeader>
                <h1>{ data.title }</h1>
                <img src={ data.image } />
            </ShopItemHeader>
            <ShopItemDescription>
                <p>{ data.description }</p>
            </ShopItemDescription>
            <ShopItemPricing>
                Cena: { data.price } zł
                <button>Kup!</button>
            </ShopItemPricing>
        </section>
    )
}

function App() {
    return <ShopItem data={shopItemData} />;
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
