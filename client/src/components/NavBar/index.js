import React from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

function NavBar(props) {
  const history = useHistory();

  const handleSignUp = () => {
    history.push('/login');
  };

  const logout = () => {
    Axios.get('/api/user/logout').then((data) => {
      props.setLoginState(false);
      history.push('/');
    });
  };

  return (
    <>
      <nav className="navbar bg-primary p-3">
        {props.login ? (
          <button onClick={logout}> Logout</button>
        ) : (
          <button onClick={handleSignUp}> Login/Singup</button>
        )}
      </nav>
    </>
  );
}

export default NavBar;
