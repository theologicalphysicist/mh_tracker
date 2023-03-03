//- REACT + GATSBY
import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

//- REDUX
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

//- COMPONENTS
import HomePage from "../components/Index/HomePage";
import UserForm from "../components/UserForm";

//- REDUX - LOCAL
import { formPageReducer } from "../redux/reducers";
import { Actions, FormType } from "../redux/types";

//- STYLESHEETS
import "../styles/index.scss";
import "../styles/global.scss";


const IndexPageWrapper: React.FC<PageProps> = () => {
	const STORE = configureStore({
		reducer: {
			// PHQFormSubmit: PHQFormReducer,
			// GADFormSubmit: GADFormReducer,
			formPage: formPageReducer,

		},
		devTools: true,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	});

	return (
		<Provider store={STORE}>
			<IndexPage />
 		</Provider>
	);
}


const IndexPage: React.FC = () => {

	const dispatch = useDispatch();

	const SHOW_FORM: boolean = useSelector((state: any) => state.formPage.showForm);
	const FORM_TYPE: FormType = useSelector((state: any) => state.formPage.formType);

	const setForm = (new_form_type: FormType, show_form: boolean): any => {
		dispatch({
			type: Actions.LOAD_FORM,
			payload: {
				showForm: show_form,
				formType: new_form_type
			}
		});
	};

	return (
		<>
			{
				SHOW_FORM ? 
				<UserForm type={FORM_TYPE} backFunction={setForm} /> : <HomePage formFunction={setForm}/>
			}
			<StaticImage 
				src="../images/favicon-32x32.png" 
				alt="therefore logo"
				loading="lazy"
				className="logo"
				imgClassName="inner-logo"
			/>
		</>
	);
}

export const Head: HeadFC = () => <title>Home Page</title>;

// const STATE_TO_PROPS = (state: any): any => ({})

export default IndexPageWrapper;

