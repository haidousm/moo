import React from "react";
import PostMoo from "./PostMoo";
import Loading from "./Loading";

function Header() {
    return (
        <div className="header-container">
            <div className="profile-container">
                <div className="profile-image-container"></div>
                <a href="https://google.com" className="edit-profile-button">
                    Edit Profile
                </a>
            </div>
            <PostMoo />
            <Loading />
        </div>
    );
}

export default Header;
