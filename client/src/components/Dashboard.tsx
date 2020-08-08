import React, { useState } from "react";
import Header from "./Header";
import Feed from "./Feed";

interface IProps {
    userProfile: IUserProfile;
}

interface IUserProfile {
    displayName: string;
    firstName: string;
    lastName: string;
    imageUrl: string;
}

function Dashboard({ userProfile }: IProps) {
    // State Management
    const [postCreatedFlag, setPostCreatedFlag] = useState(true);

    const setPostCreatedFlagWrapper = (postCreatedFlag: boolean) => {
        setPostCreatedFlag(postCreatedFlag);
    };

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
