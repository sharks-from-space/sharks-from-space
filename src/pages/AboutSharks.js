import {
	WebsiteNavbar,
	Footer,
	ImageComponent,
	TextComponent,
} from "../components";
import * as images from "../images/space";

export function AboutSharks() {
	return (
		<div className="PageContainer">
			<WebsiteNavbar />
			<div className="PageContent">
				<h2 className="term-title">About Sharks</h2>

				<TextComponent
					text={
						<p>
							Sharks are more than just apex predators — they are vital
							regulators of ocean ecosystems, helping maintain healthy
							populations of prey species and ensuring biodiversity. These
							ancient creatures have thrived in the world’s oceans for over 400
							million years, yet today many shark populations face unprecedented
							pressures from overfishing, habitat loss, and climate change.
						</p>
					}
				/>
				<br />
				<ImageComponent
					src={images.WideShark}
					alt="Tag concept idea"
					width="1150px"
					className="special-image"
					credit={"Photograph By David Salmon - CTJ (Chief Technology Jawstronaut)"}

				/>

				<TextComponent
					text={
						<>
							<p>
								Understanding where sharks are and how they move is critical for
								protecting the sharks themselves and the ecosystems they
								support. Predicting shark locations advises conservation
								efforts, informs fisheries management, and helps humans make
								decisions that reduce conflict and protect key habitats.
							</p>

							<p>
								Satellite observation offers a unique perspective on the oceans,
								revealing patterns in sea surface temperature, ocean currents,
								and phytoplankton blooms — all of which influence where sharks
								feed and travel. By combining satellite and tagging data,
								researchers can uncover the hidden links between physical ocean
								features, prey availability, and shark behavior.
							</p>

							<p>
								In this project, we invite you to{" "}
								<strong>become a Jawstronaut</strong>. Track foraging hotspots,
								explore bio-inspired shark tag concepts, and help translate
								space technology into tools for ocean conservation!
							</p>
						</>
					}
				/>
			</div>
			<Footer />
		</div>
	);
}
