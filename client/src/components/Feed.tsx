import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Post from "./Post";

const axios = require("axios").default;

// Types for object returned from API
interface IPosts {
    config: Object;
    data: Array<IPost>;
    headers: Object;
    request: XMLHttpRequest;
    status: number;
    statusText: string;
}

// Types for a single post returned from API

interface IPost {
    content: string;
    created: string;
}

// Types for component props - used to fetch new posts when a new post is created

interface IProps {
    postCreatedFlag: boolean;
    setPostCreatedFlag: (postCreatedFlag: boolean) => void;
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

function Feed({ postCreatedFlag, setPostCreatedFlag }: IProps) {
    // State Management

    const [fetchedPosts, setFetchedPosts] = useState<Array<IPost>>([]);

    // Fetch new posts @ launch & new creation of posts

    useEffect(() => {
        if (postCreatedFlag) {
            axios
                .get("http://localhost:5000/posts")
                .then((posts: IPosts) => {
                    setFetchedPosts(posts.data);
                })
                .catch(console.error);
            setPostCreatedFlag(false);
        }
    }, [postCreatedFlag, setPostCreatedFlag]);

    return (
        <FeedContainer>
            {
                // Display each post by new-first (done by reversing arr)
                fetchedPosts
                    .slice(0)
                    .reverse()
                    .map((post, i) => (
                        <Post
                            key={i}
                            postContent={post.content}
                            postDate={new Date(post.created)}
                        />
                    ))
            }
        </FeedContainer>
    );
}

export default Feed;
