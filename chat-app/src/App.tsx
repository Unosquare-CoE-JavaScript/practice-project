import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from "./pages/Home/Home";
import {useSelector} from "react-redux";
import {RootState} from "./store/store";
import {Authentication} from "./pages/Authentication/Authentication";

const App = () => {
    const {loggedIn} = useSelector((state: RootState) => state.user);
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/">
                        {loggedIn ? <Home/> : <Authentication/>}
                    </Route>
                    <Route path="/home">
                        {loggedIn ? <Home/> : <Redirect to="/authenticate"/>}
                    </Route>
                    <Route path="/authenticate">
                        {loggedIn ? <Home/> : <Authentication/>}
                    </Route>
                    <Route path='*'>
                        <Redirect to='/'/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
