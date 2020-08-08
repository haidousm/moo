import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

const axios = require("axios");

interface IUserProfile {
    displayName: string;
    firstName: string;
    lastName: string;
    imageUrl: string;
}

function App() {
    const [userProfile, setUserProfile] = useState<IUserProfile>({
        displayName: "",
        firstName: "",
        lastName: "",
        imageUrl: "",
    });

    useEffect(() => {
        axios
            .get("http://localhost:5000/auth/user", { withCredentials: true })
            .then((req: { data: IUserProfile }) => {
                setUserProfile(req.data);
            })
            .catch((error: Error) => {
                console.log(error);
                setUserProfile({
                    displayName: "",
                    firstName: "",
                    lastName: "",
                    imageUrl: "",
                });
            });
    }, []);

    return (
        <Router>
            <div>
                <Switch>
                    {userProfile.displayName === "" ? (
                        <Route exact path="/">
                            <Login />
                        </Route>
                    ) : (
                        <Route exact path="/dashboard">
                            <Dashboard userProfile={userProfile} />
                        </Route>
                    )}

                    {userProfile.displayName !== "" ? (
                        <Redirect to="/dashboard" />
                    ) : (
                        <Redirect to="/" />
                    )}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
