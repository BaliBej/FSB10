// app.js

import React, {Component} from "react";
import ReactDOM from "react-dom";

import MobileMenu from './MobileMenu';

function App() {
  return <MobileMenu />
}

ReactDOM.render(
  <div className="iphone-x">
    <i/>
    <b/>
    <App/>
  </div>,
  document.getElementById("app")
);

// MobileMenu.js

import React, { useState} from 'react';

function MobileMenu() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="mobile">
        <header className="mobile-menu">
            <a href="#" onClick={() => setIsOpen(!isOpen)} className="open-menu"></a>
            <nav className={ isOpen ? '' : 'hide' } >
            <ul>
                <li><a href="#">O nas</a></li>
                <li><a href="#">Zespół</a></li>
                <li><a href="#">Produkty</a></li>
                <li><a href="#">Kontakt</a></li>
            </ul>
            <a href="#" onClick={() => setIsOpen(false)} className="close-menu">Zamknij menu</a>
            </nav>
        </header>
        </section>
    )

}

export default MobileMenu;
