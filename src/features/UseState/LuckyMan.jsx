import React, { useState } from 'react';
import PropTypes from 'prop-types';

LuckyMan.propTypes = {
    
};

function LuckyMan(props) {
    const personList = ["Phước", "Hải", "Nhật", "Nguyên"];

    const [luckyMan, setLuckyMan] = useState(null);

    const handleGetLuckyMan = () => {
        setLuckyMan(() => personList[Math.floor(Math.random() * personList.length)]);
    }

    return (
        <div className='container'>
            <h1>{luckyMan || "Chưa có người được chọn"}</h1>
            <button className='btn btn-warning'
                onClick={handleGetLuckyMan}>Click me!</button>
        </div>
    );
}

export default LuckyMan;