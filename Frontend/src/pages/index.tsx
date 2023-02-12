import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import "../styles/index.scss";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<>
			<div id="main">
				<header>
					<StaticImage
						src="../images/mh_image.png"
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
				<main>
					<div id="option_section">
						<h2>
							Choose an option:
						</h2>
						<div id="link_section">
							<div id="form_section">
								<Link className="page-link" to="/form">Take a PHQ-9 Test</Link>
								<Link className="page-link" to="/form">Take a GAD-7 Test</Link>
								<Link className="page-link" to="/form">Take a Both Tests</Link>

							</div>
							<Link className="page-link results-link" to="/form">View Previous Test Results</Link>
						</div>
					</div>
				</main>
			</div>
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

