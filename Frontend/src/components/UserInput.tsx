import React from "react";
import { InputProps } from "../redux/types";



const UserInput: React.FC<InputProps> = ({groupName, text, questionID}) => {

    return (
        <>
            <div className="input">
                <input type="radio" name={groupName} id={questionID}/>
                <label className="input-label" htmlFor={questionID}>{text}</label>
            </div>
        </>
    );
};

export default UserInput;