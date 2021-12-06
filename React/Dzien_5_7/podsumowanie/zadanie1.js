import React, {Component} from "react";
import ReactDOM from "react-dom";

// import products from './data/products';

const products = [
    {
      code: 2569656303,
      single_price: 4,
      qty: 1,
      name: "Ser Camembert"
    },
    {
      code: 6015390151,
      single_price: 2,
      qty: 2,
      name: "Baton energetyczny"
    },
    {
      code: 6391248461,
      single_price: 2.99,
      qty: 1,
      name: "Masło"
    },
    {
      code: 5350073302,
      single_price: 1.5,
      qty: 3,
      name: "Woda gazowana"
    },
    {
      code: 8676161554,
      single_price: 3.55,
      qty: 1.56,
      name: "Jabłka luz"
    },
    {
      code: 5039291056,
      single_price: 12.49,
      qty: 1,
      name: "Zestaw śniadaniowy"
    }
  ];

function Receipt() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nazwa</th>
                    <th>Cena</th>
                    <th>Ilość</th>
                    <th>Łączna cena</th>
                </tr>
            </thead>
            <tbody>
                { products.map(product => {
                    return (
                        <tr>
                            <td>{product.name}</td>
                            <td>{product.single_price}</td>
                            <td>{product.qty}</td>
                            <td>{(product.single_price * product.qty).toFixed(2)} zł</td>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td>RAZEM</td>
                    <td>-</td>
                    <td>-</td>
                    <td>{ (products.reduce((prev, next) => prev + (next.single_price * next.qty), 0)).toFixed(2) } zł</td>
                </tr>
            </tfoot>
        </table>
    )
}

function App() {
    return <Receipt />
}

ReactDOM.render(
  <App/>,
  document.getElementById("app")
);
