import React, { useState, useEffect } from "react";
import Moo from "./Moo";
const axios = require("axios").default;

interface IMoos {
    config: Object;
    data: Array<IMoo>;
    headers: Object;
    request: XMLHttpRequest;
    status: number;
    statusText: string;
}

interface IMoo {
    content: string;
    created: string;
}

function Feed() {
    const [moos, setMoos] = useState<Array<IMoo>>([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/moos")
            .then((apiMoos: IMoos) => {
                setMoos(apiMoos.data);
            })
            .catch(console.error);
    }, []);

    return (
        <div className="feed-container">
            {moos
                .slice(0)
                .reverse()
                .map((moo) => (
                    <Moo
                        mooValue={moo.content}
                        mooDate={new Date(moo.created)}
                    />
                ))}
        </div>
    );
}

export default Feed;
