import React, { useState } from 'react';
import "./style.css";
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom'

async function loginUser(credentials) {

   
    return fetch("http://localhost:3001/api/user/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

async function signupUser(credentials) {
    return fetch("http://localhost:3001/api/user/signup", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }) {

    const history = useHistory()

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        })
        setToken(token);
        history.push('/WeatherList');
    }

    const handleSignUp = async e => {
        e.preventDefault();
        const token = await signupUser({
            username,
            password
        })
        setToken(token);

    }
    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Log In</button>
                </div>

            </form>

            <h1>Please Sign up </h1>

            <form onSubmit={handleSignUp}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Sign Up</button>
                </div>

            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}