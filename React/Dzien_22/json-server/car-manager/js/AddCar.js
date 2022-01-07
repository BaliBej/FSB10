import React, { useState } from 'react';

function AddCar(props) {

    const handleSubmit = e => {
        e.preventDefault();

        const element = e.target.elements;

        props.handleAdd({
            name: element[0].value,
            brand: element[1].value,
            engine: {
                type: element[2].value,
                hp: element[3].value,
            }
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Name" />
            <input placeholder="Brand" />
            <input placeholder="Type" />
            <input placeholder="HP" type="number" />
            <button>Dodaj</button>
        </form>
    )

}

export default AddCar;
