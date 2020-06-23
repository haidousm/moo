import React from "react";
import styled from "styled-components";

// Prop types

interface IProps {
    mooValue: string;
    mooDate: Date;
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
    grid-template-columns: 2;
    grid-template-rows: 2;
`;

const PostInfoContainer = styled.div`
    grid-column: 1 / 3;
    display: grid;
    grid-template-columns: 1fr 1fr 250px;
    text-align: center;
`;

const PostUsernameContainer = styled.div`
    background: #000;
    padding: 10px;
    border-radius: 5px 5px 5px 5px;

    grid-column: 1 / 1;

    & p {
        display: inline-block;
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
`;

const PostContentContainer = styled.div`
    background-color: #000;
    padding: 10px;
    border-radius: 5px 5px 5px 5px;
    grid-column: 1 / 3;
`;

function Moo({ mooValue, mooDate }: IProps) {
    return (
        <PostContainer>
            <PostInfoContainer className="moo-info-container">
                <PostUsernameContainer className="moo-username-container">
                    <p>Moussa Haidous</p>
                </PostUsernameContainer>
                <PostDateContainer className="moo-date-container">
                    <p>{mooDate.toLocaleString()}</p>
                </PostDateContainer>
            </PostInfoContainer>
            <PostContentContainer className="moo-text-container">
                <p>{mooValue}</p>
            </PostContentContainer>
        </PostContainer>
    );
}

export default Moo;
