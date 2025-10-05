import {
	TextComponent,
	WebsiteNavbar,
	Footer,
	RoadMapLong,
} from "../components";
import * as images from "../images/space";

// import * as images from "../images/long-term-vision";

export function SharksAndSpace() {
	return (
		<div className="PageContainer">
			<WebsiteNavbar />
			<div className="PageContent">
								<h2 className="term-title">Sharks & Space</h2>

				<TextComponent
					text={
						<p>We’re participating in the <strong>NASA Space Apps Challenge: Sharks from Space</strong>!
							<br/><br/>Using Earth observation data, we explore how satellite measurements of ocean currents, temperature, and plankton can help track shark movements and identify foraging hotspots. As <strong>Jawstronauts</strong>, we combine this data with tagging insights to better understand and protect these incredible apex predators. </p>
					}
				/>
				<img className="shark-space-image" src={images.SharksSpace} alt="Shark in space"/>
			</div>
			<div className="RoadMapLong">{/* <RoadMapLong /> */}</div>
			<Footer />
		</div>
	);
}
