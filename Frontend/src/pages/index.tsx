import React, {useState} from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

//- COMPONENTS
import HomePage from "../components/Index/HomePage";
import UserForm from "../components/UserForm";

//- STYLESHEETS
import "../styles/index.scss";
import "../styles/global.scss";
import { FormType } from "../const/types";

const IndexPage: React.FC<PageProps> = () => {

	const [SHOW_FORM, setShowForm] = useState<boolean>(false);
	const [FORM_TYPE, setFormType] = useState<FormType>(undefined);

	const setForm: any = (new_form_type: FormType, show_form: boolean) => {
		setShowForm(show_form);
		setFormType(new_form_type)
	}

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
	)
}

export const Head: HeadFC = () => <title>Home Page</title>;

export default IndexPage;

