import React, { useState } from 'react';


function Car(props) {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    })


    const updateColor = () => {
        const colorList = ['red', 'blue', 'yellow'];
        const rnd = Math.floor(Math.random() * 3);
        setCar(prev => {
            return {...prev, color: colorList[rnd]}
        })
        console.log(car.color, rnd);

    } 
    return (
        <div className='container'>
            <div style={{ backgroundColor: car.color }}>
                <h1>My {car.brand}</h1>
                <p>It is a {car.color} {car.model} from {car.year}</p>
            </div>
            <button onClick={() => updateColor()} className='btn btn-primary' type='button' >Update</button>

        </div>
    );
}

export default Car;