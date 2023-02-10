import React from "react";
import { QuestionProps } from "../const/types";
import InputGroup from "./InputGroup";

const Question: React.FC<QuestionProps> = ({text, groupName}) => {

    return (
        <div>
            <label>{text}</label>
            <InputGroup groupName={groupName} />
        </div>
    );
};

export default Question;

