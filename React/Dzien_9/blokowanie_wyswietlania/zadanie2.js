// app.js

import React from "react";
import ReactDOM from "react-dom";

import AccountData from './AccountData';

function App() {
    return <AccountData />
}

ReactDOM.render(<App/>, document.getElementById("app"));

// AccountData.js

import React, { useState } from 'react';
import FakeAPI from "./data/fakeAPI.js";

function AccountData() {

    const [ data, setData ] = useState(false);

    FakeAPI.then(data => {
        setData(data);
    });

    return (
        <>
            {
                data ? (
                    <ul>
                        { data.map(item => {
                            return <li key={item.day}>{ item.day } { item.balance } { item.change }</li>
                        })}
                    </ul>
                ) : null
            }
        </>
    )

}


export default AccountData;
