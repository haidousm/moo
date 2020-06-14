import React, { useState } from "react";
import axios from "axios";
function Header() {
    const [newMoo, setNewMoo] = useState("");

    const postNewMoo = () => {
        axios.post(
            "",
            { moo: newMoo },
            { headers: { "Content-Type": "application/json" } }
        );
    };

    return (
        <div className="header-container">
            <div className="profile-container">
                <div className="profile-image-container"></div>
                <a href="https://google.com" className="edit-profile-button">
                    Edit Profile
                </a>
            </div>
            <div className="new-moo-container">
                <div className="new-moo-input-field">
                    <input
                        type="text"
                        name="new-moo"
                        id="new-moo"
                        placeholder="What is on your mind?"
                        value={newMoo}
                        onChange={(e) => {
                            setNewMoo(e.target.value);
                        }}
                    />
                </div>

                <input
                    type="button"
                    value="Moo"
                    className="edit-profile-button post-moo-button"
                    onClick={() => {
                        postNewMoo();
                    }}
                />
            </div>
        </div>
    );
}

export default Header;
