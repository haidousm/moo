import React, { useState } from "react";
import Header from "./components/Header";
import Feed from "./components/Feed";
function App() {
    const [newMoo, setNewMoo] = useState(true);

    const setNewMooExists = (newMooExists: boolean) => {
        setNewMoo(newMooExists);
    };

    return (
        <div>
            <Header setNewMooExists={setNewMooExists} />
            <Feed newMooExists={newMoo} setNewMooExists={setNewMooExists} />
        </div>
    );
}

export default App;
