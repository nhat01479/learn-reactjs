import React, { useState } from 'react';


function Counter(props) {
    const [quantity, setQuantity] = useState(1);
    const handleDecreamentQuantity = () => {
        setQuantity(quantity - 1)
    }
    const handleIncreamentQuantity = () => {
        setQuantity(quantity + 1)
  
    }
    const handleQuantityChange = (event) => {
        const newValue = parseInt(event.target.value, 10);
        if (!isNaN(newValue) && newValue >= 1 && newValue <= 10) {
            setQuantity(newValue);
        }
    };
    return (
        <div className='container text-center'>
            <div className='form-group col-4 container d-flex'>
                <button className='btn btn-secondary' 
                    onClick={handleDecreamentQuantity} disabled={quantity <= 1}>-</button>
                <input type="number" className='form-control text-center' 
                    onChange={handleQuantityChange} style={{width: "100px"}} value={quantity}/>
                <button className='btn btn-success'
                    onClick={handleIncreamentQuantity} disabled={quantity >= 10}>+</button>
            </div>
            
        </div>
    );
}

export default Counter;

/**
const handleIncreamentQuantity = () => {
    setQuantity(quantity + 1)
    setQuantity(quantity + 1)
    setQuantity(quantity + 1)
} 
Trường hợp này thì sẽ thực hiện setQuantity tách biệt 3 lần, sau đó gom lại nên chỉ tăng quantity lên 1
Nếu muốn tăng lên 3 phải dùng setQuantity((prev)=>{
    return prev + 1   
})
const handleIncreamentQuantity = () => {
    setQuantity((prev)=>{
        return prev + 1   
    })
    setQuantity((prev)=>{
        return prev + 1   
    })
        setQuantity((prev)=>{
    return prev + 1   
})
} 

 */