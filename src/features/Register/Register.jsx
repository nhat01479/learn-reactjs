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
    username: yup.string().min(6, "Ít nhất 6 ký tự").max(20, "Tối đa 20 ký tự").required(),
    email: yup.string().email("Không đúng định dạng").required('Email là bắt buộc').typeError("Email is not valid"),
    password: yup.string().matches(/[A-Za-z0-9]{8,20}/, "Password không hợp lệ").required(),
    phone: yup.string().matches(/(84|0[3|5|7|8|9])+([0-9]{8})/, "Số điện thoại không hợp lệ")
    
})
function Register() {
   
    const {register, formState: {errors}, handleSubmit, reset} = useForm({
        resolver: yupResolver(schema)
    })

    const handleRegister = (data) => {
        console.log(data);

        reset()
    }
    
    return (
        <div className='container mt-lg-5 d-flex justify-content-center'>

            <form onSubmit={handleSubmit(handleRegister)} className='row col-4'>
                <h1 className='text-center'>Register</h1>
                {/* <ul className='list-unstyled'>
                    <li>
                        <span className="text-danger">{errors?.username?.message}</span>
                    </li>
                    <li>
                        <span className="text-danger">{errors?.email?.message}</span>
                    </li>
                    <li>
                        <span className="text-danger">{errors?.password?.message}</span>
                    </li>
                    <li>
                        <span className="text-danger">{errors?.phone?.message}</span>
                    </li>
                </ul> */}
                <div className='form-group mb-2'>
                    <label className='fw-bolder mb-2'>Username</label>
                    <input type="text" className='form-control' 
                        {...register('username')} />
                    <span className="text-danger">{errors?.username?.message}</span>

                </div>
                <div className='form-group mb-2'>
                    <label className='fw-bolder mb-2'>Email</label>
                    <input type="email" className='form-control'  
                        {...register('email', {
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            },
                        })}/>
                    <span className="text-danger">{errors?.email?.message}</span>

                </div>
                <div className='form-group mb-2'>
                    <label className='fw-bolder mb-2'>Password</label>
                    <input type="password" className='form-control' 
                         {...register('password')} />
                    <span className="text-danger">{errors?.password?.message}</span>

                </div>
                <div className='form-group mb-2'>
                    <label className='fw-bolder mb-2'>City</label>
                    <select {...register("city")} className='form-select' defaultValue={cityList[1].id}>
                        {
                            cityList.map((city) => (
                                <option key={city.id} value={JSON.stringify(city)} >{city.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='form-group mb-2'>
                    <label className='fw-bolder mb-2'>Phone</label>
                    <input type="text" className='form-control' 
                        {...register('phone')}/>
                    <span className="text-danger">{errors?.phone?.message}</span>

                </div>
                <div className=' mb-2'>
                    <button type="submit" className='btn btn-primary'>Register</button>
                    <button type="button" className='btn btn-secondary' onClick={() => reset()}>Cancel</button>
                </div>    
            </form>
            
        </div>
    );
}

export default Register;