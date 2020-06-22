import React from "react";

interface IProps {
    mooValue: string;
    mooDate: Date;
}

function Moo({ mooValue, mooDate }: IProps) {
    return (
        <div className="moo-container">
            <div className="moo-info-container">
                <div className="moo-username-container">
                    <p>Moussa Haidous</p>
                </div>
                <div className="moo-date-container">
                    <p>{mooDate.toLocaleString()}</p>
                </div>
            </div>
            <div className="moo-text-container">
                <p>{mooValue}</p>
            </div>
        </div>
    );
}

export default Moo;
