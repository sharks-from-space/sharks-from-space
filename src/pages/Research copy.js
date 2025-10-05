import { TermComponent, WebsiteNavbar, Footer, RoadMap } from "../components";
// import * as images from "../images/long-term-vision";

export function Research() {
	return (
		<div className="PageContainer">
			<WebsiteNavbar />
			<div className="PageContent">
				<TermComponent
					title={"Research"}
					text={
						<>
							<p>
								Correlation between temperature, water elevation, and shark
								movements
							</p>
							<p>
								Anticyclones - warmth, depth, mesopelagic fish trapped in the
								eddit
							</p>
							<p>
								Cyclones - phytoplankton blooms, nutrient upwelling, and their
								impact on shark feeding
							</p>
							<p>Correlation between eddies and sharks</p>
							<p>Datasets for shark tags movements, temperature</p>
						</>
					}
				/>
			</div>
			<iframe
				src="https://www.chatbase.co/chatbot-iframe/X1iQDc1PqxsOUX6ExDBkJ"
				width="70%"
				style={{ height: "100%", minHeight: "700px" }}
				frameBorder="0"
				title="Chatbase Shark Research Chatbot"
			/>
			{/* <div className="RoadMap">
			<RoadMap />
		</div> */}

			<Footer />
		</div>
	);
}
