import React from "react";
import { InputProps } from "../const/types";

const UserInput: React.FC<InputProps> = ({groupName, text}) => {

    return (
        <>
            <div className="input">
                <input type="radio" name={groupName} />
                <label className="input-label">{text}</label>
            </div>
        </>
    );
};

export default UserInput;