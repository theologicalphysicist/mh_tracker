import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";

import {formPageReducer, GADFormReducer, PHQFormReducer} from "./reducers";

export const STORE = configureStore({
    reducer: {
        // PHQFormSubmit: PHQFormReducer,
        // GADFormSubmit: GADFormReducer,
        formPage: formPageReducer,

    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // enhancers: [composeWithDevTools()]
});

export type RootState = ReturnType<typeof STORE.getState>;
export type AppDispatch = typeof STORE.dispatch;