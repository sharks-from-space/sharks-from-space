import {
	WebsiteNavbar,
	HomeComponent,
	Footer,
	TermBox,
	DictionaryEntry,
} from "../components";
import * as images from "../images/home";

export function Home() {
	return (
		<div className="PageContainer">
			<WebsiteNavbar />
			<div className="PageContent">
				<div className="intro-text">
					<HomeComponent
						image={images.sharkCover}
						title="Jawstronauts"
						text=""
					/>
				</div>
				<br />
				<br />
				<br />

				<DictionaryEntry
					word="Jawstronaut"
					pronunciation="/ˈdʒɔːs.trə.nɔːt/"
					partOfSpeech="noun"
					definition="An explorer who applies Earth Observation and ecological modeling to study sharks and their habitats, helping humans make informed choices that protect marine life and ocean resources."
				/>

				<div className="mission-box">{/* <MissionBox />   */}</div>

				<div className="term-boxes-container">
					<TermBox
						title="About Sharks"
						text="Sharks play a crucial role in maintaining the health of marine ecosystems. They help to ensure the balance of the ocean's food chain by regulating the populations of other species"
						link="/about-sharks"
						buttonText="Why do sharks matter?"
					/>
					<TermBox
						title="Sharks & Space"
						text="Follow our suggestions for how you can use space technology and data to help care for shark populations."
						link="/sharks-and-space"
						buttonText="Become a Jawstronaut!"
					/>
				</div>

				<div className="term-boxes-container">
					<TermBox
						title="Rethinking Shark Tags"
						text="Inspired by the remora, a small fish which attaches to sharks using a highly evolved sucker, we propose a concept tag design which is effective and non-invasive."
						link="/rethinking-shark-tags"
						buttonText="Discover our innovative biomimetic tags"
					/>
					<TermBox
						title="SharkGPTeeth"
						text="SharkGPTeeth is your educational companion, guiding you through the oceans and helping you explore shark behaviour, habitats, and conservation."
						link="/shark-gpteeth"
						buttonText="Talk to a Shark!"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
