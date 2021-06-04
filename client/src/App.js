import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmpApp from './components/EmpApp';
import EmpList from './pages/EmpList';
import WeatherList from './pages/WeatherList';

function App() {
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

                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default App;