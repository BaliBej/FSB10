// app.js

import React from "react";
import ReactDOM from "react-dom";

import UserInfo from './UserInfo';

function App() {
    return <UserInfo />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// UserInfo.js

import React, { useState, useEffect } from 'react';

function UserInfo() {

    const [ user, setUser ] = useState({ name: 'Jan', surname: 'Kowalski' });

    useEffect(() => {
        setUser({
            name: 'Tomasz',
            surname: 'Tomkowski'
        })
    }, []);

    return <p>{ user.name } { user.surname }</p>

}

export default UserInfo;
