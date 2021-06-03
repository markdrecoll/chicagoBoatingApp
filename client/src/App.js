import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmpApp from './components/EmpApp';
import EmpList from './pages/EmpList';

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
                            <Route exact path={"/emplist"}>
                                <EmpList />
                            </Route>

                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default App;