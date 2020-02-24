import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth.js";

const Login = props => {
    console.log(props);
    const [ user, setUser] = useState({
        credentials: {
            username: '',
            password: ''
        }
    })

    const handleChange = e => {
        setUser({
            credentials: {
                ...user.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', user.credentials )
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload);
                props.history.push('/friends');
            })
            .catch(err => console.log(`Login.js axiosWithAuth error`, err.response))
    }

    return (
        <div>
            <h1>Hello from the Login.js file</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="username"
                    label="username"
                    placeholder="username"
                    value={props.username}
                    onChange={handleChange}
                    className="input"
                />
                <input 
                    type="text"
                    name="password"
                    label="password"
                    placeholder="password"
                    value={props.password}
                    onChange={handleChange}
                    className="input"
                />
                <button className="login-button">Login</button>
            </form>
        </div>
    )
}

export default Login;