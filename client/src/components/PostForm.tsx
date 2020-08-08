import React, { useState } from "react";
import styled from "styled-components";
const axios = require("axios").default;

// Prop types
interface IProps {
    setPostCreatedFlag: (postCreated: boolean) => void;
}

// Styles

const PostFormContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    justify-items: center;

    width: 100%;
    height: 100%;

    font-size: 2rem;
    padding-left: 20px;

    @media only screen and (max-width: 1100px) {
        flex-direction: column;
        padding-left: 0px;
    }
`;

const InputFieldContainer = styled.div`
    height: 75px;
    width: 600px;

    background-color: transparent;
    border-radius: 5px;
    backdrop-filter: blur(100px);

    display: flex;
    align-items: center;

    @media only screen and (max-width: 1100px) {
        width: 100%;
        text-align: center;
    }
`;

const InputField = styled.input`
    border: none;
    width: 100%;
    height: 100%;

    font-size: 2rem;
    padding-left: 20px;

    &:focus {
        outline-width: 0;
    }

    &::placeholder {
        color: black;
    }

    @media only screen and (max-width: 1100px) {
        text-align: center;
        padding-left: 0px;
    }
`;

const PostButton = styled.input`
    text-align: center;
    padding: 5px;
    text-decoration: none;
    border: 1px solid #000;
    border-radius: 5px;
    font-size: 1rem;
    color: #000;

    width: 100px;
    background-color: transparent;
`;

function PostForm({ setPostCreatedFlag }: IProps) {
    // State Management
    const [newPost, setNewPost] = useState("");

    // Create and POST new post to API
    const createNewPost = () => {
        setNewPost("");
        axios
            .post(
                "http://localhost:5000/posts",
                { post: newPost },
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            )
            .then(setPostCreatedFlag(true))
            .catch(function (error: string) {
                console.log(error);
            });
    };

    return (
        <PostFormContainer>
            <InputFieldContainer>
                <InputField
                    type="text"
                    placeholder="What is on your mind?"
                    value={newPost}
                    onChange={(e) => {
                        setNewPost(e.target.value);
                    }}
                />
            </InputFieldContainer>

            <PostButton
                type="button"
                value="Moo"
                onClick={() => {
                    createNewPost();
                }}
            />
        </PostFormContainer>
    );
}

export default PostForm;
