import React, { useState } from 'react';



function Cart() {

    const [cartList, setCartList] = useState(() => {
        let data = [];
        if (localStorage.getItem('cart') == undefined) {
            data = [
                {
                    product_id: 1,
                    product_name: "Kẹo chanh",
                    price: 1000
                },
                {
                    product_id: 2,
                    product_name: "Sữa chua",
                    price: 2000
                },
            ]
            localStorage.setItem('cart', JSON.stringify(data));
        } else {
            data = JSON.parse(localStorage.getItem('cart'));
        }
    return data;

    })
    console.log(cartList);
    return (
        <div className='container text-center'>
            {
                cartList.map((item) => (
                        <div className='col-6 form-group ' key={item.product_id}>
                            <p className='text-start'>{item.product_id}. {item.product_name} - {item.price}$</p>
                        </div>
                ))
            }
        </div>
    );
}

export default Cart;