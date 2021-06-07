import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WeatherList from './pages/WeatherList';
<<<<<<< HEAD
import React, {useState} from 'react';
import Login from './components/Login'

function setToken(userToken){
    sessionStorage.setItem('token', JSON.stringify(userToken))
}; 

function getToken(){
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken.token
}

=======
import Harbor from './pages/Harbor';
>>>>>>> 74fa18c695d5abf2f90a0e02fadc4845fecc1c24

function App() {

    const token = getToken()

    if (!token) {
        return <Login setToken={setToken}/>
    }

    return (
        <Router>
            <div className="container">
                <div className="row">

                    <div className="col-12">


                        <Switch>
                            <Route exact path={"/"}>
                                <EmpApp />
                            </Route>
                            <Route exact path={"/weatherlist"}>
                                <WeatherList />
                            </Route>


                            <Route exact path={"/harbor"}>
                                <Harbor />
                            </Route>

                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default App;