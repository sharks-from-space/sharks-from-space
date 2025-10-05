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
				text={
					<>
						<p>
							The animation below shows the movements of four individual sharks over approximately 6 months from August 2016 to January 2017, taken from the data recorded by Braun et al. <sup>10</sup>. Interestingly, it appears that all four sharks spend time in the same area, then set off on their own separate journeys to the deep ocean at roughly the same time. This could be explained by multiple factors, such as food availability, water temperature, breeding seasons or sea conditions.
						</p>
						<p>
							Overlaying Earth observation data can give more information for researchers, helping them piece together the puzzle of shark behaviour. For example, changes in sea surface temperature can be monitored by satellites, and could give an indication why the sharks decide to begin their journeys at similar times.
						</p>
						<p>
							Jawstronauts can contribute to this research, by collecting data from many different sources and studying the interactions between sharks and their environments. Possible datasets include:
						</p>
						<ul>
							<li><strong>MODIS or VIIRS</strong> - measuring sea surface temperature and chlorophyll-a</li>
							<li><strong>AIRS</strong> - measuring atmospheric temperature and humidity</li>
							<li><strong>SMAP</strong> - measuring sea surface salinity</li>
							<li><strong>Jason-3</strong> - measuring sea surface height, waves and currents</li>
						</ul>
						<p>
							The real value in research comes from analysing many sources of data and finding correlations between them, helping solve the complex puzzles of the natural world and expanding the opportunities for conservation.
						</p>
					</>
				}
			/>
			<img
				className="shark-space-image"
				src={images.SecondTrack}
				alt="Shark track data analysis"
			/>
			<div className="RoadMapLong">{/* <RoadMapLong /> */}</div>
			<Footer />
		</div>
	);
}
