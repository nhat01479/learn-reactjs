import React, { useState } from 'react';


function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const handleLogin = async () => {

    //     alert(JSON.stringify({'username': username, 'password': password}))

    //     fetch('https://fakestoreapi.com/auth/login',{
    //         method:'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body:JSON.stringify({
    //             username,
    //             password
    //         })
    //     })
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))

    // }
    const handleLogin = async () => {
        let response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        let data = await response.json()
        console.log(data);
    }
    const handleCancel = () => {
        setUsername("");
        setPassword("");
    }

    return (
        <div className='container'>
            <div className='col-md-6 offset-3'>
                <div className='form-group  mt-3'>
                    <label>Username</label>
                    <input type="text" value={username} className='form-control'
                         onInput={(e) => setUsername(e.target.value)}/>
                </div>
                <div className='form-group  mt-3'>
                    <label>Password</label>
                    <input type='password' value={password} className='form-control'
                        onInput={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button className='btn btn-primary'
                        onClick={handleLogin} >Login</button>
                    <button className='btn btn-secondary'
                        onClick={handleCancel} >Cancel</button>
                </div>
            </div>     
        </div>
    );
}

export default Login;
