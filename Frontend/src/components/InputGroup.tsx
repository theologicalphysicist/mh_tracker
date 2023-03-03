import React, { useState } from "react";

import { InputGroupProps } from "../redux/types";
import UserInput from "./UserInput";


const InputGroup: React.FC<InputGroupProps> = ({groupName, textOptions, questionID}) => {

    return (
        <div className="input-group">
            {
                textOptions.map((t_o: string) => <UserInput groupName={groupName} text={t_o} questionID={questionID} />)
            }
        </div>
    );
};

export default InputGroup;