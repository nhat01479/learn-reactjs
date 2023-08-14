import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

ColorBox.propTypes = {
    
};

function ColorBox(props) {
    const {color} = props;

    const name = "Nhật";
    const age = "20";
    const isMale = true;
    const person = {
        name,
        age,
        isMale
    }
    const colors = [{id: 1, color: 'Red'}, {id: 2, color: 'Yellow'}, {id: 3, color: 'Blue'}];
    
    return (
        <div className='box' style={{backgroundColor: color}}>   
            {isMale && (
                <React.Fragment>
                    <p>{person.name}</p>
                    <p>{person.age}</p>
                    <p>{isMale ? 'Male' : 'Female'}</p>
                </React.Fragment>
            )}

            <ul>
                {colors.map(item => 
                    (<li key={item.id} >{item.color}</li>)
                )}
            </ul>  


        </div>
    );
}
ColorBox.propTypes = {
    color: PropTypes.string.isRequired,
    rounded: PropTypes.bool
}
ColorBox.defaultProps = {
    rounded: true
}

export default ColorBox;