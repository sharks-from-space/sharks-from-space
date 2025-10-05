import { TermComponent, WebsiteNavbar, Footer, RoadMapLong, TextComponent } from "../components";
// import * as images from "../images/long-term-vision";

export function AboutSharks() {
	return (
		<div className="PageContainer">
			<WebsiteNavbar />
			<div className="PageContent">
				<h2 className="term-title">About Sharks</h2>

	<TextComponent text={<>
  <p>
    Sharks are more than just apex predators — they are vital regulators of ocean ecosystems, helping maintain healthy populations of prey species and ensuring biodiversity. These ancient creatures have thrived in the world’s oceans for over 400 million years, yet today many shark populations face unprecedented pressures from overfishing, habitat loss, and climate change.
  </p>
  
  <p>
    Understanding where sharks are and how they move is critical for protecting both these species and the ecosystems they support. Predicting shark locations guides conservation efforts, informs fisheries management, and helps humans make decisions that reduce conflict and protect key habitats.
  </p>
  
  <p>
    NASA satellite data offer a unique perspective on the oceans, revealing patterns in sea surface temperature, ocean currents, and phytoplankton blooms — all of which influence where sharks feed and travel. By combining satellite observations with tagging data, researchers can uncover the hidden links between physical ocean features, prey availability, and shark behavior.
  </p>
  
  <p>
    In this project, we invite you to <strong>become a Jawstronaut</strong> — an explorer of the deep who uses satellite data and ecological insight to uncover the secrets of shark behavior. As a Jawstronaut, you will track foraging hotspots, explore bio-inspired shark tag concepts, and help translate space technology into tools for ocean conservation.
  </p>
  </>} />
</div>
		<div className="RoadMapLong">
			{/* <RoadMapLong /> */}
		</div>
			<Footer />
		</div>
	);
}
