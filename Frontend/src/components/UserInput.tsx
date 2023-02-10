import React from "react";
import { InputProps } from "../const/types";

const UserInput: React.FC<InputProps> = ({groupName, text}) => {

    return (
        <>
            <label>{text}</label>
            <input type="radio" name={groupName}></input>
        </>
    );
};

export default UserInput;