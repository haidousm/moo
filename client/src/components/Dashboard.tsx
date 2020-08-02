import React, { useState, useEffect } from "react";
import Header from "./Header";
import Feed from "./Feed";
const axios = require("axios").default;
function Dashboard() {
    // State Management
    const [postCreatedFlag, setPostCreatedFlag] = useState(true);

    const setPostCreatedFlagWrapper = (postCreatedFlag: boolean) => {
        setPostCreatedFlag(postCreatedFlag);
    };

    useEffect(() => {
        axios
            .get("http://localhost:5000/auth/user")
            .then((req: any, res: any) => {
                console.log(req.data);
            });
    }, []);

    return (
        <div>
            <Header setPostCreatedFlag={setPostCreatedFlagWrapper} />
            <Feed
                postCreatedFlag={postCreatedFlag}
                setPostCreatedFlag={setPostCreatedFlagWrapper}
            />
        </div>
    );
}

export default Dashboard;
