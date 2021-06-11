import React from 'react';
import { useHistory, Link } from 'react-router-dom';
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
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <Link to="/" className="nav-link text-light">
          <h3>Chicago Boating App</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                Home
              </Link>
            </li>
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
                  Login/Sign Up
                </Link>
              </li>
            )}

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
            <li className="nav-item">
              <Link className="nav-link text-light" to="/attraction">
                Attractions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
