import React from "react";
import PostForm from "./PostMoo";
import styled from "styled-components";

interface IProps {
    setNewMooExists: (newMooExists: boolean) => void;
}

// Styling

const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
    border-bottom: 1px solid #000;
`;

const ProfileContainer = styled.div`
    height: 175px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    justify-items: center;

    border-right: 1px solid #000;
`;

const ProfileImageContainer = styled.div`
    height: 100px;
    width: 100px;

    border-radius: 50%;
    background-color: #000;
`;

const EditProfileButton = styled.a`
    text-align: center;
    padding: 5px;
    text-decoration: none;
    border: 1px solid #000;
    border-radius: 5px;
    font-size: 1rem;
    color: #000;

    width: 100px;
`;

function Header({ setNewMooExists }: IProps) {
    return (
        <HeaderContainer>
            <ProfileContainer>
                <ProfileImageContainer></ProfileImageContainer>
                <EditProfileButton
                    href="https://google.com"
                    className="edit-profile-button"
                >
                    Edit Profile
                </EditProfileButton>
            </ProfileContainer>
            <PostForm setNewMooExists={setNewMooExists} />
        </HeaderContainer>
    );
}

export default Header;
