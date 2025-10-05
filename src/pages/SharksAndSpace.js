import {
	TextComponent,
	WebsiteNavbar,
	Footer,
	ImageComponent,
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
						<p>
							Using Earth observation data, we explore how satellite
							measurements of ocean currents, temperature, and plankton can help
							track shark movements and identify foraging hotspots. As{" "}
							<strong>Jawstronauts</strong>, we combine this data with tagging
							insights to better understand and protect these incredible apex
							predators.{" "}
						</p>
					}
				/>

				<ImageComponent
					src={images.SharksSpace}
					alt="Shark in space"
					width="1150px"
					className="special-image"
					credit={"Design on Canva by Monique Grinstein - CEJ (Chief Executive Jawstronaut)"}
				/>
			</div>
			<h2 className="term-title">Data analysis example</h2>
			<TextComponent
				text={<p>Movement of a tagged shark over a six-month period.</p>}
			/>
			<img
				className="shark-space-image"
				src={images.Track}
				alt="Shark track data analysis"
			/>

			<div className="RoadMapLong">{/* <RoadMapLong /> */}</div>
			<Footer />
		</div>
	);
}
