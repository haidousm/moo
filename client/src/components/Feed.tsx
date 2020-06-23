import React, { useState, useEffect } from "react";
import Moo from "./Moo";
import styled from "styled-components";
const axios = require("axios").default;

// Types for object returned from API
interface IMoos {
    config: Object;
    data: Array<IMoo>;
    headers: Object;
    request: XMLHttpRequest;
    status: number;
    statusText: string;
}

// Types for a single post returned from API

interface IMoo {
    content: string;
    created: string;
}

// Types for component props - used to fetch new posts when a new post is created

interface IProps {
    newMooExists: boolean;
    setNewMooExists: (newMooExists: boolean) => void;
}

// Styles

const FeedContainer = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 500px;
    overflow-y: auto;
`;

function Feed({ newMooExists, setNewMooExists }: IProps) {
    // State Management

    const [moos, setMoos] = useState<Array<IMoo>>([]);

    // Fetch new posts @ launch & new creation of posts

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
        <FeedContainer>
            {
                // Display each post by new-first (done by reversing arr)
                moos
                    .slice(0)
                    .reverse()
                    .map((moo) => (
                        <Moo
                            mooValue={moo.content}
                            mooDate={new Date(moo.created)}
                        />
                    ))
            }
        </FeedContainer>
    );
}

export default Feed;
