import React from "react";
import type { HeadFC } from "gatsby";

//- COMPONENTS
import Question from "./Question";
import Button from "./Global/Button";

//- CONSTS & TYPES
import { FormPageProps } from "../redux/types";
// @ts-ignore
import data from '../const/questions.json';

//- STYLESHEETS
import "../styles/forms.scss";

const validateForm = (): boolean => {
    console.log();

    return true;
}

const submitForm: any = (data: any) => {
    console.log(data);
}

const UserForm: React.FC<FormPageProps> = ({type, backFunction}) => {

    const TEXT_OPTIONS = data.questionOptions.map((q_o: any) => q_o.questionText);

    let question_texts: string[] = [];
    let question_ids: string[] = [];

    data[type].questions.forEach((q: any) => {
        question_texts.push(q.text);
        question_ids.push(q.id);
    });

    //TODO: DEAL WITH SUBMIT BUTTON
    return (
        <>
            <h1>{data.questionnaireHeader}</h1>
            <form autoComplete="off" name={type} action={submitForm}>
                {
                    question_texts.map((q: string, i: number) => <Question text={q} groupName={`${type}${i.toString()}`} textOptions={TEXT_OPTIONS} questionID={`${question_ids[i]}-${i}`} />)
                }
            </form>
            <div id="form_controls">
                <Button text="Back" page="form" clickFunction={backFunction} form={type}/>
                <Button text={`Submit ${type} Test Only`} page="form" type="submit" form={type}/>
                <Button text={`Proceed to ${type == "PHQ" ? "GAD" : "PHQ"} Test`} page="form" type="submit" clickFunction={() => {}} form={type}/>

            </div> 
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