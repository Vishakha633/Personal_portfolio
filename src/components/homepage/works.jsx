import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./celebal.png"
								alt="Celebal"
								className="work-image"
							/>
							<div className="work-title">CELEBAL</div>
							<div className="work-subtitle">
								React Developer
							</div>
							<div className="work-duration">2023 - Present(June-July)</div>
						</div>

						<div className="work">
							<img
								src="./mnit.png"
								alt="MNIT"
								className="work-image"
							/>
							<div className="work-title">MNIT Jaipur</div>
							<div className="work-subtitle">
								Cyber Security
							</div>
							<div className="work-duration">2022 - June</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
