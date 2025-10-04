import "./MissionBox.css";

export function MissionBox({ text, alt }) {
	return (
		<div className="mission-box">
			<div className="mission-text">
				{/* <h2>Jawstronats</h2> */}

				<h3>Our Mission</h3>
				<p>
					To enhance shark conservation efforts by leveraging technology to
					predict shark locations.
					<h3>Project domains</h3>
					Software Engineering, Hardware Development, Earth Observation, and
					Data Analysis.
				</p>

				<h3>Research & Development</h3>
				<p>
					Study 1: Correlation between surface water elevation, temperature, and
					phytoplankton availability to predict shark habitats.
				</p>
				<p>
					Study 2: Development of a non-invasive tag to monitor shark movements.
				</p>
				{/* <p>We focus on both the 
            <span className="font-bold"> short-term mission </span>
            and the <span className="font-bold"> long-term vision </span> of evolving from a single Launch and Landing Pad (LLP) into a 
            <span className="font-bold"> multifunctional hub </span> with multiple LLPs and human-centered habitats. This infrastructure will enable 
            <span className="font-bold"> scientific, commercial, and strategic activities </span> on the Moon and beyond.</p> */}
			</div>
		</div>
	);
}
