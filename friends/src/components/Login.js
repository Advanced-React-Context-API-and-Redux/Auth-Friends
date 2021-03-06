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
            .post('login', user.credentials )
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload);
                props.history.push('/people');
            })
            .catch(err => console.log(`Login.js axiosWithAuth error`, err.response))
    }

    return (
        <div className="login">
            <h1>Please login to view and add your Friends</h1>
            <form className="forms-style" onSubmit={handleSubmit}>
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
                <button className="btn-style">Login</button>
            </form>
        </div>
    )
}

export default Login;