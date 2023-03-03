import React from "react";

//- TYPES & CONSTANTS
import { QuestionProps } from "../redux/types";

//
import InputGroup from "./InputGroup";

const Question: React.FC<QuestionProps> = ({text, groupName, textOptions, questionID}) => {

    return (
        <div className="question">
            <label className="question-label">{text}</label>
            <InputGroup groupName={groupName} textOptions={textOptions} questionID={questionID} />
        </div>
    );
};

export default Question;

