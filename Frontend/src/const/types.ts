//- ALL PAGES
export type ButtonProps = {text: string, page: "form" | "index", role?: "main", type?: "button" | "reset" | "submit", clickFunction?: any, form?: string}
export type FormType = "PHQ" | "GAD" | undefined;

//- HOME PAGES
export type HomePageProps = {formFunction: any};

//- FORM PAGES
export type FormPageProps = {type: FormType, backFunction?: any};
export type QuestionProps = {text: string, groupName: string, textOptions: string[], questionID: string};
export type InputGroupProps = {groupName: string, textOptions: string[], questionID: string};
export type InputProps = {groupName: string, text: string, questionID: string};