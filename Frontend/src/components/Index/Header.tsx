import React from "react";
import { StaticImage } from "gatsby-plugin-image";


const Header: React.FC = () => {

    return (
        <header>
            <StaticImage
                src="../../images/mh_image.png"
                alt="clipart logo of brain inside head"
                loading="lazy"
                className="mh_img"
            />
            <div id="header_text_section">
                <h1>
                    Mental Health Tracker
                </h1>
                <p>
                    Take a PHQ-9 and/or GAD-7 test, store, and visualise your results
                </p>
            </div>
        </header>
    );
}

export default Header;