import React from "react";

//- TYPES & CONSTANTS
import { QuestionProps } from "../const/types";

//
import InputGroup from "./InputGroup";

const Question: React.FC<QuestionProps> = ({text, groupName, textOptions}) => {

    return (
        <div className="question">
            <label className="question-label">{text}</label>
            <InputGroup groupName={groupName} textOptions={textOptions}/>
        </div>
    );
};

export default Question;

