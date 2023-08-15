import React, { useEffect, useState } from 'react';

const courses = [
    {
        id: 1,
        name: "HTML, CSS"
    },
    {
        id: 2,
        name: "JavaScripts"
    },
    {
        id: 3,
        name: "Reactjs"
    }
];

function Radio(props) {

    const [checked, setChecked] = useState(2);

    const handleSubmit = () => {
        console.log({ id: checked });
    }

    return (
        <div className='container col-12 offset-5'>
            {courses.map(course => (
                <div key={course.id}>
                    <input
                        checked={checked === course.id}
                        onChange={() => setChecked(course.id)}
                        type="radio" className='form-check-input' />
                    <label className='text-start'>{course.name}</label>
                </div>
            ))}
            <button onClick={handleSubmit} className='btn btn-secondary' type="button">Submit</button>
        </div>
    );
}
function Checkbox(props) {

    const [checked, setChecked] = useState([]);

    const handleSubmit = () => {
        console.log({ id: checked });
    }
    const handleCheck = (id) => {
        setChecked((prev) => {

            //biến prev đại diện cho giá trị hiện tại của checked

            const isCheck = checked.includes(id);
            if (isCheck) {
                return checked.filter(item => item !== id)
            } else {

                return [...prev, id]
            }
        })
    }
    useEffect(() => {
        console.log("checked", checked);
    }, [checked])
    return (
        <div className='container col-12 offset-5'>
            {courses.map(course => (
                <div key={course.id}>
                    <input
                        checked={checked.includes(course.id)}
                        onChange={() => handleCheck(course.id)}
                        type="checkbox" className='form-check-input' />
                    <label className='text-start'>{course.name}</label>
                </div>
            ))}
            <button onClick={handleSubmit} className='btn btn-secondary' type="button">Submit</button>
        </div>
    );
}
function SelectOption(props) {

    const [value, setValue] = useState(courses[1].id);

    const handleSubmit = () => {
        console.log(value);
    }
    const handleSetValue = (e) => {
        console.log(e.target.value);
        setValue(e.target.value)
        
    }
 
    return (
        <div className='container col-12 offset-5'>
            <div className='col-3 mt-5'>
                <select className='form-select mb-2' 
                    onChange={(e) => handleSetValue(e)}
                    defaultValue={value}
                >

                    {courses.map(course => (
                        <option key={course.id} value={course.id} >{course.name}</option>
                    ))}


                </select>
                <button onClick={handleSubmit} className='btn btn-secondary' type="button">Submit</button>
            </div>
        </div>
    );
}

export { Radio, Checkbox, SelectOption };