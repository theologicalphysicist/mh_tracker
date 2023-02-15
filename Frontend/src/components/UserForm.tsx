import React from "react";
import type { HeadFC } from "gatsby";

//- COMPONENTS
import Question from "./Question";
import Button from "./Global/Button";

//- CONSTS & TYPES
import { FormPageProps } from "../const/types";
// @ts-ignore
import data from '../const/questions.json';

//- STYLESHEETS
import "../styles/forms.scss";

const UserForm: React.FC<FormPageProps> = ({type, backFunction}) => {

    const TEXT_OPTIONS = data.questionOptions.map((q_o: any) => q_o.questionText);

    //TODO: DEAL WITH SUBMIT BUTTON
    return (
        <>
            <h1>{data.questionnaireHeader}</h1>
            <form target="_blank" autoComplete="off" name={type}>
                {
                    data[type].questions.map((q: string, i: number) => <Question text={q} groupName={`${type}${i.toString()}`} textOptions={TEXT_OPTIONS} />)
                }
            </form>
            <Button text="Back" page="form" clickFunction={backFunction} form={type}/>
            <Button text="Submit" page="form" type="submit" clickFunction={() => {}} form={type}/>
        </>
    );
};

export const Head: HeadFC = () => {
    return (
        <title>
            Form
        </title>
    );
};

export default UserForm;