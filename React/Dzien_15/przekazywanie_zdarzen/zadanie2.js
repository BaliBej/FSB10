// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import Shop from './Shop';

function App() {
    return <Shop />;
}

ReactDOM.render(<App/>, document.getElementById("app"));

// Shop.js

import React, { useState } from 'react';

import ShopItem from './ShopItem';

function Shop() {

    const [ cart, setCart ] = useState([]);

    const addToCart = (item) => {
        setCart(prevCart => [...prevCart, item]);
    }

    return (
        <>
            <ShopItem title="MacBook Pro" onBuy={addToCart} />
            <ShopItem title="Dell" onBuy={addToCart} />
            <ShopItem title="Asus" onBuy={addToCart} />
            <h1>Koszyk</h1>
            { cart.map(item => <li key={item}>{ item }</li>) }
        </>
    )

}

export default Shop;

// ShopItem.js

function ShopItem() {

    return (
        <>
            <h1>{ props.title }</h1>
            <button onClick={() => props.onBuy(props.title)}>Kup</button>
        </>
    )

}

export default Shop;
