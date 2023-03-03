import { Reducer } from "@reduxjs/toolkit";

//- LOCAL IMPORTS
import { FormType, Actions } from "./types";
import { GET_FORM } from "./actions";

type PageState = {
    showForm: boolean,
    formType: FormType
}

const INITIAL_STATE: PageState = {
    showForm: false,
    formType: undefined,
}

export const formPageReducer = (state: PageState = INITIAL_STATE, action: any): PageState => {
    switch (action.type) {
        case Actions.LOAD_FORM:
            return {...state, showForm: action.payload.showForm, formType: action.payload.formType}
        default:
            return state;
    };
}

type PHQFormState = {
    q1: boolean,
    q2: boolean,
    q3: boolean,
    q4: boolean,
    q5: boolean,
    q6: boolean,
    q7: boolean,
    q8: boolean,
    q9: boolean,
};

type GADFormState = {
    q1: boolean,
    q2: boolean,
    q3: boolean,
    q4: boolean,
    q5: boolean,
    q6: boolean,
    q7: boolean,
};

const PHQ_INITIAL_STATE: PHQFormState = {
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false,
    q6: false,
    q7: false,
    q8: false,
    q9: false,
};

const GAD_INITIAL_STATE: GADFormState = {
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false,
    q6: false,
    q7: false,
};

export const PHQFormReducer = (state = PHQ_INITIAL_STATE, action: any): PHQFormState => {
    
    switch (action.type) {
        default:
            return state;
    };
};


export const GADFormReducer = (state: GADFormState = GAD_INITIAL_STATE, action: any) => {

    switch (action.type) {
        default:
            return state;
    };
};

// export default formReducer;