import {
	TextComponent,
	WebsiteNavbar,
	Footer,
	RoadMap,
	ImageComponent,
} from "../components";
import * as images from "../images/space";

export function SharkTags() {
	return (
		<div className="PageContainer">
			<WebsiteNavbar />
			<div className="PageContent">
				<h2 className="term-title">Shark Tags</h2>

				<TextComponent
					text={
						<>
							<p>
								Shark tags are small devices attached to sharks to monitor their
								movement, behaviour, and environmental conditions.
							</p>
							<p>
								Our novel design for the shark tag is inspired by Remora fish,
								which attach themselves to large marine animals like sharks and
								whales using a highly-evolved sucker on the top of their head.
								This sucker is strong enough to remain attached even at high
								speeds or if its host rubs against rocks. However, it can also
								detach instantly by releasing the suction, and does not damage
								its host's skin.
							</p>
						</>
					}
				/>
				<br />
				<ImageComponent
					src={images.ActualRemora}
					alt="Tag concept idea"
					width="800px"
					className="special-image"
					credit={"Photograph By Mauritio Handler/National Geographic"}
				/>
				<ImageComponent
					src={images.Remora}
					alt="Tag concept idea"
					width="800px"
					className="special-image"
					credit={"Design by David Salmon - CTJ (Chief Technology Jawstronaut)"}
				/>

				<TextComponent
					text={
						<>
							<p>
								Scientists and engineers have been developing methods of
								replicating this feature, and several papers have been published
								on this subject<sup>1</sup>. Using this technology on the tag prevents any
								damage to the shark's skin, but allows the tag to remain
								securely attached to its host for many months.
							</p>
							<p>
								Eventually, the suction will weaken and the tag will fall off.
								The tag can then float up to the surface and be recovered.
							</p>
							<p>
								On board the tag, there are sensors to measure pressure,
								temperature, motion and GPS location. Colour sensors can also
								measure the colour of the shark's skin to give non-invasive
								indications of the health of the animal<sup>2,3,4</sup>.
							</p>
						</>
					}
				/>
				<ImageComponent
					src={images.Tag1}
					alt="Tag concept view 1"
					width="800px"
					className="special-image"
					credit={"Design by David Salmon - CTJ (Chief Technology Jawstronaut)"}
				/>
				<TextComponent
					text={
						<p>
							Data can be transmitted back from the sensor using the ARGOS
							satellite system <sup>5</sup>, which is already extensively used for tracking
							animals in the ocean. Many compact systems are available, which
							will be incorporated into the design of the tag to enable tracking
							and data collection remotely. For example, the ARTIC R2 ARGOS
							Satellite Transceiver Shield from Sparkfun Electronics<sup>6</sup> is simple and affordable.{" "}
						</p>
					}
				/>

				<ImageComponent
					src={images.Tag2}
					alt="Tag concept view 2"
					width="800px"
					className="special-image"
					credit={"Design by David Salmon - CTJ (Chief Technology Jawstronaut)"}
				/>
			</div>

			<Footer />
		</div>
	);
}
