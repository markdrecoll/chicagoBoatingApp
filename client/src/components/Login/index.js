import React, { useState } from 'react';
import "./style.css";
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom'
import Axios from 'axios'

async function loginUser(credentials) {
    console.log('credentails', credentials)

    return Axios.post('/api/user/login', credentials)
   
    // return fetch("http://localhost:3001/api/user/login", {
    //     method: "POST",
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(credentials)
    // })
    //     .then(data => data.json())
}

async function signupUser(credentials) {
    // return fetch("http://localhost:3001/api/user/signup", {
    //     method: "POST",
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(credentials)
    // })
    //     .then(data => data.json())

        return  Axios.post('/api/user/signup', credentials)
}

export default function Login(props) {

    const history = useHistory()

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
     
        const login = await loginUser({
            username,
            password
        })
        console.log('WHAT WE GET BACK FROM LOGIN!!!', login)
        props.setLoginState(login.data.logged_in)
        history.push('/weatherList')
        // Axios.get('/api/user/loginCheck', {withCredentials: true}).then(function(loginCheck) {
        //     console.log('login check!!!', loginCheck)
        // })
       // setToken(token);
    
    }

    const handleSignUp = async e => {
        e.preventDefault();
        const signup = await signupUser({
            username,
            password
        })
        props.setLoginState(signup.data.logged_in)
        history.push('/weatherList')
      //  setToken(token);

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