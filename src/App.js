import './App.css';
import HomePage from "./pages/HomePage";
import ChooseGamePage from "./pages/ChooseGamePage";
import GetStartedPage from "./pages/GetStartedPage";
import CreateCustomGamePage from "./pages/CreateCustomGamePage";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
function App() {

    return (
        <Router>
            <main>
                <Switch>
                    <Route path="/create-custom-game">
                        <CreateCustomGamePage/>
                    </Route>

                    <Route exact path={["/", "/#choose", "/#get-started"]}>
                        <div className='app-container'>
                            <div className="content">
                                <HomePage/>
                                <ChooseGamePage/>
                                <GetStartedPage/>
                            </div>
                        </div>
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}
export default App;
