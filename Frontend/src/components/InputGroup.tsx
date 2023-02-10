import React, { useState } from "react";

import { InputGroupProps } from "../const/types";
import UserInput from "./UserInput";

const InputGroup: React.FC<InputGroupProps> = ({groupName}) => {

    return (
        <div>
            <UserInput groupName={groupName} text="TEMP" />
            <UserInput groupName={groupName} text="TEMP" />
            <UserInput groupName={groupName} text="TEMP" />
            <UserInput groupName={groupName} text="TEMP" />
        </div>
    );
};

export default InputGroup;