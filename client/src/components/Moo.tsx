import React from "react";

interface IProps {
    mooValue: string;
}

function Moo({ mooValue }: IProps) {
    return (
        <div className="moo-container">
            <div className="moo-username-container">
                <p>Moussa Haidous</p>
            </div>
            <div className="moo-text-container">
                <p>{mooValue}</p>
            </div>
        </div>
    );
}

export default Moo;
