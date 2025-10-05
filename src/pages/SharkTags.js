import { TermComponent, WebsiteNavbar, Footer, RoadMap } from "../components";
// import * as images from "../images/long-term-vision";

export function SharkTags() {
	return (
		<div className="PageContainer">
			<WebsiteNavbar />
			<div className="PageContent">
				<TermComponent
					title={"Shark Tags"}
					text={
						<>
							<p>
								Shark tags are small devices attached to sharks to monitor their
								movement, behavior, and environmental conditions.
							</p>
							<p>
								New concepts here
							</p>

						</>
					}
				/>
			</div>

			<Footer />
		</div>
	);
}
