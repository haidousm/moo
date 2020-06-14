import React, { useState } from "react";
const axios = require("axios").default;
function PostMoo() {
    const [newMoo, setNewMoo] = useState("");
    const postNewMoo = () => {
        axios
            .post(
                "http://localhost:5000/",
                { moo: newMoo },
                { headers: { "Content-Type": "application/json" } }
            )
            .then(function (response: string) {
                console.log(response);
            })
            .catch(function (error: string) {
                console.log(error);
            });

        const form = document.getElementById("new-moo");
        form!.style.display = "none";

        const loadingSpinner = document.getElementById("loading-spinner");
        loadingSpinner!.style.display = "block";
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
