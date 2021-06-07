import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WeatherList from './pages/WeatherList';
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