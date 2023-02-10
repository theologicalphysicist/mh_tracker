import React from "react";

import Question from "./Question";

const UserForm: React.FC = () => {
    return (
        <>
            <h1>TEMP</h1>
            <form>
                <Question text="Test" groupName="Test"/>
                <Question text="Test" groupName="Test2"/>
            </form>
        </>
    );
};

export default UserForm;