import React, { useState } from "react";
import Header from "./components/Header";
import Feed from "./components/Feed";
function App() {
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

export default App;
