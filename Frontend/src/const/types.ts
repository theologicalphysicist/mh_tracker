import type { PageProps } from "gatsby";

type FormProps = {type: string};
export type FormPageProps = PageProps<FormProps>;

export type QuestionProps = {text: string, groupName: string};
export type InputGroupProps = {groupName: string};
export type InputProps = {groupName: string, text: string};