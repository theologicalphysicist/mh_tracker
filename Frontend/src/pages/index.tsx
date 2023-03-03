import React, {useState} from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Provider } from "react-redux";

//- COMPONENTS
import HomePage from "../components/Index/HomePage";
import UserForm from "../components/UserForm";

//- REDUX
import {STORE} from "../redux/store";

import { formPageReducer } from "../redux/reducers";

//- STYLESHEETS
import "../styles/index.scss";
import "../styles/global.scss";
import { FormType } from "../redux/types";

const IndexPage: React.FC<PageProps> = () => {

	const [SHOW_FORM, setShowForm] = useState<boolean>(false);
	const [FORM_TYPE, setFormType] = useState<FormType>(undefined);

	const setForm: any = (new_form_type: FormType, show_form: boolean) => {
		setShowForm(show_form);
		setFormType(new_form_type)
	};

	console.log(STORE.getState().formPage.showForm);

	return (
		<Provider store={STORE}>
			{
				STORE.getState().formPage.showForm ? 
				<UserForm type={STORE.getState().formPage.formType} backFunction={setForm} /> : <HomePage formFunction={setForm}/>
			}
			<StaticImage 
				src="../images/favicon-32x32.png" 
				alt="therefore logo"
				loading="lazy"
				className="logo"
				imgClassName="inner-logo"
			/>
		</Provider>
	)
}

export const Head: HeadFC = () => <title>Home Page</title>;

export default IndexPage;

