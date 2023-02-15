import React from "react";
import { Link } from "gatsby";

//- TYPES
import { HomePageProps, FormType } from "../../const/types";

//- COMPONENTS
import Button from "../Global/Button";

const PageLinks: React.FC<HomePageProps> = ({formFunction}) => {

    return (
        <div id="link_section">
            <div id="form_section">
                <Button text="Take a PHQ-9 Test" page="index" clickFunction={() => formFunction("PHQ", true)}/>
                <Button text="Take a GAD-7 Test" page="index" clickFunction={() => formFunction("GAD", true)}/>
            </div>
            <Button text="View Previous Test Results" role="main" page="index" clickFunction={() => {}}/>
            <Link className="page-link results-link" to="/form">View Previous Test Results</Link>
        </div>
    );
}

export default PageLinks;