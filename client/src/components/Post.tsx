import React from "react";
import styled from "styled-components";

// Prop types
interface IProps {
    postContent: string;
    postDate: Date;
}

// Styles
const PostContainer = styled.div`
    width: 600px;
    color: white;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 5px;
    margin: 30px;

    display: grid;
    gap: 15px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    @media only screen and (max-width: 1100px) {
        width: 80vw;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`;

const PostInfoContainer = styled.div`
    grid-column: 1 / 3;
    display: grid;
    grid-template-columns: 1fr 1fr 250px;
    text-align: center;
    @media only screen and (max-width: 1100px) {
        width: 80vw;
        grid-column: 1 / 1;
        grid-row: 1 / 3;

        grid-template-columns: 1fr;
        grid-template-rows: 50px 1fr;
    }
`;

const PostUsernameContainer = styled.div`
    background: #000;
    padding: 10px;
    border-radius: 5px 5px 5px 5px;

    grid-column: 1 / 1;

    & p {
        display: inline-block;
    }

    @media only screen and (max-width: 1100px) {
        grid-row: 2 / 2;
    }
`;

const PostDateContainer = styled.div`
    grid-row: 1 / 1;
    grid-column: 2 / 2;
    text-align: center;
    background-color: #000;
    padding: 10px;
    border-radius: 5px 5px 5px 5px;

    grid-column: 3 / 3;

    @media only screen and (max-width: 1100px) {
        grid-column: 1 / 1;
        grid-row: 1 / 1;
    }
`;

const PostContentContainer = styled.div`
    background-color: #000;
    padding: 10px;
    border-radius: 5px 5px 5px 5px;
    grid-column: 1 / 3;

    @media only screen and (max-width: 1100px) {
        grid-column: 1 / 1;
        grid-row: 2 / 2;
    }
`;

function Post({ postContent, postDate }: IProps) {
    return (
        <PostContainer>
            <PostInfoContainer>
                <PostUsernameContainer>
                    <p>Moussa Haidous</p>
                </PostUsernameContainer>
                <PostDateContainer>
                    <p>{postDate.toLocaleString()}</p>
                </PostDateContainer>
            </PostInfoContainer>
            <PostContentContainer>
                <p>{postContent}</p>
            </PostContentContainer>
        </PostContainer>
    );
}

export default Post;
