import React, { useEffect, useState } from 'react';


function UseEffectDemo(props) {
    const [person, setPerson] = useState({name: 'name', age: 18});
    const [title, setTitle] = useState('UseEffect() demo');

    useEffect(() => {
        setPerson({name: 'Nhật', age: 29});
        setTitle('Hello!')
    }, [])

    return (
        <div className='container text-center'>
            <div>
                <h3>Title: {title}</h3>
                <h4>Name: {person.name}</h4>
                <h4>Name: {person.age}</h4>
            </div>           
        </div>
    );
}

export default UseEffectDemo;