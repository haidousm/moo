import React, { useState } from "react";
import Header from "./Header";
import Feed from "./Feed";
function Dashboard() {
    // State Management
    const [postCreatedFlag, setPostCreatedFlag] = useState(true);

    const setPostCreatedFlagWrapper = (postCreatedFlag: boolean) => {
        setPostCreatedFlag(postCreatedFlag);
    };

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
