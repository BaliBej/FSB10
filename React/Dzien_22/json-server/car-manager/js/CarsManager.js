import React, { useState, useEffect } from 'react';

import Car from './Car';
import AddCar from './AddCar';

function CarsManager() {

    const [ cars, setCars ] = useState(null);

    useEffect(() => {

        fetch('http://localhost:3000/cars')
            .then(response => response.json())
            .then(data => {
                setCars(data);
            })

    }, []);

    const handleAdd = car => {

        fetch('http://localhost:3000/cars/', {
            method: 'POST',
            body: JSON.stringify(car),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            setCars(prevState => [...prevState, data]);
        })
        .catch(error => {
            console.error(error.message);
        })

    }

    const handleSell = id => {
        fetch(`http://localhost:3000/cars/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                setCars(cars.filter(element => element.id !== id));
            }
        })
        .catch(error => {
            console.error(error.message);
        });
    }

    const handleEdit = (id, car) => {

        fetch(`http://localhost:3000/cars/${id}`, {
            method: 'PUT',
            body: JSON.stringify(car),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            setCars([...cars].map(car => {
                if (car.id === data.id) {
                    car = data;
                }

                return car;
            }))
        })
        .catch(error => {
            console.error(error.message);
        })

    }

    return (
        <>
            { cars ? (
                <div>
                    <AddCar handleAdd={handleAdd} />
                    <ul>
                        { cars.map(car => {
                            return (
                                <li key={car.id}>
                                    <Car onHandleEdit={handleEdit} onHandleSell={handleSell} car={car} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            ) : null }
        </>
    )

}

export default CarsManager;
