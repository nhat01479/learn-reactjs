import React, { useState } from 'react';

function UseStateAdvanced(props) {

    const [state, setState] = useState({count: 0, salary: 1000});

    const handleIncrease = (value) => {
        
        const valueIncrease = value === 'count' ? 1 : 500;

        setState({
            ...state,
            [value]: state[value] + valueIncrease
        })
    }

    return (
        <div className='container text-center'>
            <p>Count: {state.count}</p>
            <p>Salary: {state.salary}</p>
            <div>
                <button className='btn btn-outline-success' onClick={() => handleIncrease('count')}>Increase Count</button>
                <button className='btn btn-outline-success' onClick={() => handleIncrease('salary')}>Increase Salary</button>
            </div>
        </div>
    );
}

export default UseStateAdvanced;