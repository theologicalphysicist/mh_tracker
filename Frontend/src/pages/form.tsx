import React from "react";
import type { HeadFC } from "gatsby";

import UserForm from "../components/UserForm";

const FormPage: React.FC = () => {

    // const HEADER: string = (props.formType == "PHQ9" ? "PHQ-9 Questionnarie" : "GAD-7 Questionnarie"); 

    return (
        <main>
            <UserForm></UserForm>
        </main>
    );
};

export const Head: HeadFC = () => {
    return (
        <title>
            Form
        </title>
    );
};

export default FormPage;