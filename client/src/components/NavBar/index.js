import React from 'react';
import { useHistory } from 'react-router-dom'
import Axios from 'axios'


function NavBar(props) {
    const history = useHistory()

    const handleSignUp = () => {
        history.push('/login')
    }

    const logout = () => {
        Axios.get('/api/user/logout').then((data) => {
            props.setLoginState(false)
            history.push('/')
        })
    }

    return (
        <>
        <div>
        {props.login ? (<button onClick= {logout}> Logout</button>) : <button onClick={handleSignUp}> Login/Singup</button>}
        </div>
        
        </>
    )
}

export default NavBar;