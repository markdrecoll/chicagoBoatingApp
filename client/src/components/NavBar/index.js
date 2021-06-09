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
      <nav className="navbar navbar-expand-lg bg-primary p-3">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {props.login ? (
            <li className="nav-item">
              <a className="nav-link text-light" href="/" onClick={logout}>
                {' '}
                Logout
              </a>
            </li>
          ) : (
            <li className="nav-item">
              <a
                className="nav-link text-light"
                href="/login"
                onClick={handleSignUp}
              >
                {' '}
                Login/Singup
              </a>
            </li>
          )}
          <li className="nav-item">
            <a className="nav-link text-light" href="/">
              Home
            </a>
          </li>
          {props.login ? (
            <li className="nav-item">
              <a className="nav-link text-light" href="/weatherlist">
                Weather List
              </a>
            </li>
          ) : (
            <li className="nav-item d-none">
              <a className="nav-link text-light" href="/weatherlist">
                Weather List
              </a>
            </li>
          )}
          <li className="nav-item">
            <a className="nav-link text-light" href="/harbor">
              Harbors
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
