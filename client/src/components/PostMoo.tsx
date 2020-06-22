import React, { useState } from "react";
const axios = require("axios").default;

interface IProps {
    setNewMooExists: (newMooExists: boolean) => void;
}

function PostMoo({ setNewMooExists }: IProps) {
    const [newMoo, setNewMoo] = useState("");

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
        <div className="new-moo-container" id="new-moo">
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
    );
}

export default PostMoo;
