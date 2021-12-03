import React from "react";
import ReactDOM from "react-dom";

const menu = [
    {
        name: 'Strona główna',
        link: '/'
    },
    {
        name: 'Blog',
        link: '/blog'
    },
    {
        name: 'Cennik',
        link: '/cennik'
    },
    {
        name: 'Kontakt',
        link: '/kontakt'
    }
];

class Menu extends React.Component {
    render() {
        return (
            <ul>
                { menu.map(item => <li key={item.name}><a href={item.link}>{item.name}</a></li>) }
            </ul>
        )
    }
}

ReactDOM.render(
  <Menu />,
  document.getElementById("app")
);
