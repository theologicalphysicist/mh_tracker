import { Actions, FormType } from "./types";


export const GET_FORM = (form: FormType) => ({
    type: Actions.LOAD_FORM,
    payload: form
});

// export const SUBMIT_FORM = (form: FormType, )