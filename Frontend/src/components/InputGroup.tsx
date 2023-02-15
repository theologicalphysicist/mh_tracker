import React, { useState } from "react";

import { InputGroupProps } from "../const/types";
import UserInput from "./UserInput";

const InputGroup: React.FC<InputGroupProps> = ({groupName, textOptions}) => {

    return (
        <div className="input-group">
            {
                textOptions.map((t_o: string) => <UserInput groupName={groupName} text={t_o} />)
            }
        </div>
    );
};

export default InputGroup;