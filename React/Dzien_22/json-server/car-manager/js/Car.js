import React, { useEffect, useState } from 'react';

function Car(props) {

  const { car, onHandleSell, onHandleEdit } = props;

  const [ carInfo, setCarInfo ] = useState({
    name: car.name,
    brand: car.brand,
    type: car.engine.type,
    hp: car.engine.hp,
  });

  const [ edit, setEdit ] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;

    setCarInfo(prevState=> {
      return {
        ...prevState,
        [name]: value
      }
    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    onHandleEdit(car.id, {
        name: carInfo.name,
        brand: carInfo.brand,
        engine: {
            type: carInfo.type,
            hp: carInfo.hp,
        }
    });

    setEdit(false);

  }

  return (
    <>
      { !edit &&
        <>
        <div>
            <h1>{car.brand} - {car.name}</h1>
            <h2>Engine type: {car.engine.type} HP: {car.engine.hp}</h2>
        </div>
        <button onClick={() => onHandleSell(car.id)}>Sprzedany</button>
        <button onClick={() => setEdit(true)}>Edytuj</button>
        </>
      }
      { edit &&
        <>
          <form onSubmit={handleSubmit}>
            <input placeholder="Name" value={carInfo.brand} onChange={handleChange} name="brand" />
            <input placeholder="Brand" value={carInfo.name} onChange={handleChange} name="name" />
            <input placeholder="Type" value={carInfo.type} onChange={handleChange} name="type" />
            <input placeholder="HP" type="number" value={carInfo.hp} onChange={handleChange} name="hp" />
            <button>Zapisz</button>
          </form>
        </>
      }
    </>
  )

}

export default Car;
