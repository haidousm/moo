import React from "react";
import PostMoo from "./PostMoo";
import Loading from "./Loading";

interface IProps {
    setNewMooExists: (newMooExists: boolean) => void;
}

function Header({ setNewMooExists }: IProps) {
    return (
        <div className="header-container">
            <div className="profile-container">
                <div className="profile-image-container"></div>
                <a href="https://google.com" className="edit-profile-button">
                    Edit Profile
                </a>
            </div>
            <PostMoo setNewMooExists={setNewMooExists} />
            <Loading />
        </div>
    );
}

export default Header;
