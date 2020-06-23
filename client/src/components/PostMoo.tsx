import React, { useState } from "react";
import styled from "styled-components";
const axios = require("axios").default;

// Prop types
interface IProps {
    setNewMooExists: (newMooExists: boolean) => void;
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
`;

const InputFieldContainer = styled.div`
    height: 75px;
    width: 600px;

    background-color: transparent;
    border-radius: 5px;
    backdrop-filter: blur(100px);

    display: flex;
    align-items: center;
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

function PostMoo({ setNewMooExists }: IProps) {
    // State Management
    const [newMoo, setNewMoo] = useState("");

    // Create and POST new moo to API
    const postNewMoo = () => {
        setNewMoo("");
        axios
            .post(
                "http://localhost:5000/moos",
                { moo: newMoo },
                { headers: { "Content-Type": "application/json" } }
            )
            .then(setNewMooExists(true))
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
                    value={newMoo}
                    onChange={(e) => {
                        setNewMoo(e.target.value);
                    }}
                />
            </InputFieldContainer>

            <PostButton
                type="button"
                value="Moo"
                onClick={() => {
                    postNewMoo();
                }}
            />
        </PostFormContainer>
    );
}

export default PostMoo;
