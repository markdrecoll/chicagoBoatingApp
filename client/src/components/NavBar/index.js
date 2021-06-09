import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import Axios from 'axios';

function NavBar(props) {
  console.log(props);
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
              <Link className="nav-link text-light" to="/" onClick={logout}>
                {' '}
                Logout
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                to="/login"
                onClick={handleSignUp}
              >
                {' '}
                Login/Singup
              </Link>
            </li>
          )}
          <li className="nav-item">
            <Link className="nav-link text-light" to="/">
              Home Page
            </Link>
          </li>
          {props.login ? (
            <li className="nav-item">
              <Link className="nav-link text-light" to="/weatherlist">
                Weather List
              </Link>
            </li>
          ) : (
            <li className="nav-item d-none">
              <Link className="nav-link text-light" to="/weatherlist">
                Weather List
              </Link>
            </li>
          )}
          <li className="nav-item">
            <Link className="nav-link text-light" to="/harbor">
              Harbors
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
