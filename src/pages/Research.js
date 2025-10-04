import { TermComponent, WebsiteNavbar, Footer, RoadMap } from "../components";
// import * as images from "../images/long-term-vision";

export function Research() {
	return (
		<div className="PageContainer">
			<WebsiteNavbar />
			<div className="PageContent">
				<TermComponent title={"Research"} text={
  <>
    <p>Humanity’s return to the Moon is the foundation for a sustained presence beyond Earth. To make this possible, we need robust lunar infrastructure that supports frequent landings, launches, and logistics operations.</p>
    <p>In the short term, the lunar spaceport will serve as the heart of this network: not just a launch and landing site, but a platform for scientific research and in-situ resource utilization (ISRU). Designing such a complex facility requires balancing environmental challenges, engineering demands, and operational needs.</p>
  </>
} />
			</div>

		<div className="RoadMap">
			<RoadMap />
		</div>

			<Footer />
		</div>
	);
}
