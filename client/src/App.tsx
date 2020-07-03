import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
const axios = require("axios").default;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    const [isAuth, setIsAuth] = useState(false);

    const checkIsAuth = () => {
        axios
            .get("http://localhost:5000/user")
            .then((req: Object, res: Object) => {});
    };

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route exact path="/">
                        <Login />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
