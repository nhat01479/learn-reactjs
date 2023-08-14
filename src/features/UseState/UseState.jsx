import React, { useState } from 'react';
import PropTypes from 'prop-types';

UseState.propTypes = {
    
};

function UseState(props) {
    const [username, setUsername] = useState(); // nếu không truyền thì mặc định null
    const [showName, setShowName] = useState(false);

    const handleInputValue  = (event) => {
        setUsername(event.target.value)
    }

    const handleShowName = () => {
        setShowName(showName ? false : true)
    }

    return (
            <div className='container text-center'>
                <div className='col-6 form-group container'>
                <input type="text" onClick={handleInputValue } className='form-control mb-3'/> 
                <button onClick={handleShowName} className='btn btn-primary'>Show Name</button>
                <p id="p_1" className='text-start'>{showName && username}</p>
                </div>
            </div>
            );
}

// function UseState(props) {
//     const handleShowName = () => {
//         document.getElementById('p_1').innerText = document.getElementById('username').value;
//     }
//     return (
//         <div className='container text-center'>
//              <div className='col-6 form-group container'>
//                 <p id="p_1" className='text-start'></p>
//                 <input type="text" id="username" className='form-control mb-3'/> 
//                 <button onClick={handleShowName} className='btn btn-primary'>Show Name</button>
//              </div>
//          </div>
//     );
// }

export default UseState;