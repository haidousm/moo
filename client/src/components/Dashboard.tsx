import React, { useState, useEffect } from "react";
import Header from "./Header";
import Feed from "./Feed";
const axios = require("axios").default;

interface IUserProfile {
    displayName: string;
    firstName: string;
    lastName: string;
    imageUrl: string;
}

function Dashboard() {
    // State Management
    const [postCreatedFlag, setPostCreatedFlag] = useState(true);
    const [userProfile, setUserProfile] = useState<IUserProfile>({
        displayName: "",
        firstName: "",
        lastName: "",
        imageUrl: "",
    });

    const setPostCreatedFlagWrapper = (postCreatedFlag: boolean) => {
        setPostCreatedFlag(postCreatedFlag);
    };

    useEffect(() => {
        axios
            .get("http://localhost:5000/auth/user", { withCredentials: true })
            .then((req: { data: IUserProfile }) => {
                setUserProfile(req.data);
            })
            .catch(console.error);
    }, []);

    return (
        <div>
            <Header
                setPostCreatedFlag={setPostCreatedFlagWrapper}
                userProfile={userProfile}
            />
            <Feed
                postCreatedFlag={postCreatedFlag}
                setPostCreatedFlag={setPostCreatedFlagWrapper}
            />
        </div>
    );
}

export default Dashboard;
