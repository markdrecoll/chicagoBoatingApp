import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WeatherList from './pages/WeatherList';
import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import Harbor from './pages/Harbor';
import Axios from 'axios';
import Landing from './pages/Landing';
import Navbar from './components/NavBar';

function App() {

    const [loginState, setLoginState] = useState(false)

    useEffect(() => {

        Axios.get('/api/user/loginCheck', { withCredentials: true }).then(function (loginCheck) {
            console.log('login check!!!', loginCheck)
            setLoginState(loginCheck.data.logged_in)
        })
    }, [])

    console.log('LOGIN STATE ', loginState)

    return (
        <Router>
            <div className="container">
                <div className="row">

                    <div className="col-12">
                    <Navbar setLoginState={setLoginState} login={loginState} />

                        {!loginState ? (
                            <Switch>
                                <Route exact path={"/"}>
                                    <Landing />
                                </Route>
                                <Route exact path={"/login"}>
                                    <Login setLoginState={setLoginState} />
                                </Route>
                                <Route exact path={"/harbor"}>
                                    <Harbor />
                                </Route>


                            </Switch>


                        ) : (
                            <Switch>
                                <Route exact path={"/"}>
                                    <Landing />
                                </Route>
                                <Route exact path={"/weatherlist"}>
                                    <WeatherList />
                                </Route>
                                <Route exact path={"/harbor"}>
                                    <Harbor />
                                </Route>
                            </Switch>
                        )}



                    </div>
                </div>
            </div>
        </Router>
    )
}

export default App;