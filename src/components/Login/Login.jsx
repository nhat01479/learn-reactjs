import React, { useState } from "react";
import { useNavigate } from "react-router";


function Login(props) {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: 'mor_2314',
        password: '83r5^_'
    })

    const handleInputValue = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        let loginRes = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        })
        let data = await loginRes.json()
        if (data.token) {
            window.sessionStorage.setItem('token', data.token);
            navigate('/')
        }
    }
    return (
        <div className="container d-flex align-items-center justify-content-center">
            <div className="row col-sm-5">
                <h3 className="text-success text-center">Login</h3>
                <form onSubmit={handleLogin}>
                    <div className="form-group mb-2">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" name="username" onInput={handleInputValue} value={user.username} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" onInput={handleInputValue} value={user.password} />
                    </div>
                    <div className="form-group mb-2">
                        <button type="submit" className="btn btn-sm btn-dark">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login