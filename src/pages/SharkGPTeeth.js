import { TermComponent, WebsiteNavbar, Footer, RoadMap } from "../components";
// import * as images from "../images/long-term-vision";

export function SharkGPTeeth() {
	return (
		<div className="PageContainer">
			<WebsiteNavbar />
			<div className="PageContent">
				<iframe
					src="https://www.chatbase.co/chatbot-iframe/X1iQDc1PqxsOUX6ExDBkJ"
					width="80%"
					style={{ 
						height: "100%", 
						minHeight: "700px",
						display: "block",
						margin: "0 auto"
					}}
					frameBorder="0"
					title="Chatbase Shark Research Chatbot"

				/>
			</div>

			{/* <div className="RoadMap">
			<RoadMap />
		</div> */}

			<Footer />
		</div>
	);
}
