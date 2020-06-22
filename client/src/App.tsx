import React, { useState } from "react";
import Header from "./components/Header";
import Feed from "./components/Feed";
function App() {
    const [newMoo, setNewMoo] = useState(false);

    const setNewMooExists = (newMooExists: boolean) => {
        setNewMoo(newMooExists);
    };

    return (
        <div className="container">
            <Header setNewMooExists={setNewMooExists} />
            <Feed newMooExists={newMoo} setNewMooExists={setNewMooExists} />
        </div>
    );
}

export default App;
