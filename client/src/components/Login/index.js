import React, { useState } from 'react';
import "./style.css";
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom'
import Axios from 'axios'

async function loginUser(credentials) {

    return Axios.post('/api/user/login', credentials)
}

async function signupUser(credentials) {

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

        props.setLoginState(login.data.logged_in)
        history.push('/weatherList')
    }

    const handleSignUp = async e => {
        e.preventDefault();
        const signup = await signupUser({
            username,
            password
        })
        props.setLoginState(signup.data.logged_in)
        history.push('/weatherList')
    }
    return (
        <div className="  py-5 mt-5">
            <div className="container text-end bg-primary text-light py-3">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                    <h4>Username</h4>
                    <input className="form-control" type="text" onChange={e => setUserName(e.target.value)} />
                    <h4>Password</h4>
                    <input className="form-control" type="password" onChange={e => setPassword(e.target.value)} />
                    <button className="btn btn-light mt-2" type="submit">Log In</button>
            </form>
            </div>

            <div className="container border border-primary py-3">
            <h1>Please Sign up </h1>
            <form onSubmit={handleSignUp}>
                    <h4>Username</h4>
                    <input className="form-control" type="text" onChange={e => setUserName(e.target.value)} />
                    <h4>Password</h4>
                    <input className="form-control" type="password" onChange={e => setPassword(e.target.value)} />
                    <button className="btn btn-secondary mt-2" type="submit">Sign Up</button>
            </form>
            </div>
            
        </div>
    )
}

// test login with and without this
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}