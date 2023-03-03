import React from "react";
import { HeadFC } from "gatsby";

import Header from "./Header";
import PageLinks from "./PageLinks";
import { HomePageProps } from "../../redux/types";

const HomePage: React.FC<HomePageProps> = ({formFunction}) => {

    return (
        <div id="main">
            <Header />
            <main>
                <div id="option_section">
                    <h2>
                        Choose an option
                    </h2>
                    <p>
                        You'll have the opportunity to change or do both tests later
                    </p>
                    <PageLinks formFunction={formFunction}/>
                </div>
            </main>
        </div>
    );
};

export const Head: HeadFC = () => <title>Home Page</title>;

export default HomePage;