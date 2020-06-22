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

interface IProps {
    newMooExists: boolean;
    setNewMooExists: (newMooExists: boolean) => void;
}

function Feed({ newMooExists, setNewMooExists }: IProps) {
    const [moos, setMoos] = useState<Array<IMoo>>([]);

    useEffect(() => {
        if (newMooExists) {
            axios
                .get("http://localhost:5000/moos")
                .then((apiMoos: IMoos) => {
                    setMoos(apiMoos.data);
                })
                .catch(console.error);
            setNewMooExists(false);
        }
    }, [newMooExists, setNewMooExists]);

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
