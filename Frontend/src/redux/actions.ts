import { Actions, FormType, QuestionResponse } from "./types";


export const GET_FORM = (form: FormType) => ({
    type: Actions.LOAD_FORM,
    payload: form
});

// export const SUBMIT_FORM = (form: FormType, )

export const RESPONSE_SELECTED = (q: QuestionResponse) => ({
    type: Actions.QUESTION_RESPONSE,
    payload: q
});