import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

const cityList = [
    {
        id: 1,
        name: "Huế",
    },
    {
        id: 2,
        name: "Đà Nẵng"
    },
    {
        id: 3,
        name: "Hà Nội"
    },
    {
        id: 4,
        name: "TP Hồ Chí Minh"
    }
]
const schema = yup.object({
    usename: yup.string().min(6, "Ít nhất 6 ký tự").max(20, "Tối đa 20 ký tự").required(),
    email: yup.string().email().min(6).max(30).required().typeError("Email is not valid"),
    password: yup.string().min(6, "Ít nhất 6 ký tự").max(20, "Tối đa 20 ký tự").required()
    
})
function Register() {
   
    const {register, formState: {errors}, handleSubmit, reset} = useForm({
        resolver: yupResolver(schema)
    })

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        city: ""
    });

    const handleInputValue = (event) => {
        setUser({
            ...user, 
            [event.target.name]: event.target.value //name="email" thì sửa email, name=username thì sửa username...
        })
        // Ở đây setUser bằng cách truyền vào 1 user dùng spread: sao chép user cũ và sửa lại thuộc tính có tên "name" của đối tượng user này
        // Cú pháp [] này tương tự user.value
    }

    const handleRegister = (event) => {
        event.preventDefault();
        alert(JSON.stringify({
            "username": user.username, 
            "email": user.email,
            "password": user.password,
            "city": user.city,
        }))
        reset()
    }
    return (
        <div className='container mt-5 d-flex justify-content-center'>

            <form onSubmit={handleRegister(handleRegister)} className='row col-4'>
                <h1 className='text-center'>Register</h1>
                <div className='form-group mb-2'>
                    <label className='fw-bolder mb-2'>Username</label>
                    <input type="text" className='form-control' name='username' 
                        {...register('username')} value={user.username} onInput={handleInputValue}/>
                    <span className="text-danger">{errors?.username?.message}</span>

                </div>
                <div className='form-group mb-2'>
                    <label className='fw-bolder mb-2'>Email</label>
                    <input type="email" className='form-control' name='email' value={user.email} onInput={handleInputValue}/>
                </div>
                <div className='form-group mb-2'>
                    <label className='fw-bolder mb-2'>Password</label>
                    <input type="password" className='form-control' name='password' value={user.password} onInput={handleInputValue}/>
                </div>
                <div className='form-group mb-2'>
                    <label className='fw-bolder mb-2'>City</label>
                    <select name="city" className='form-select' defaultValue={cityList[1].id} onInput={handleInputValue}>
                        {
                            cityList.map((city) => (
                                <option key={city.id} value={city.id} >{city.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className=' mb-2'>
                    <button className='btn btn-primary'>Register</button>
                    <button className='btn btn-secondary' onClick={() => reset()}>Cancel</button>
                </div>    
            </form>
            
        </div>
    );
}

export default Register;