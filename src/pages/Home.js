import { WebsiteNavbar, HomeComponent, Footer, TermBox, WhoAreWeBox, MissionBox,DictionaryEntry } from "../components";
import * as images from "../images/home";

export function Home() {
    return (
        <div className="PageContainer">
            <WebsiteNavbar />
            <div className="PageContent">

                <div className="intro-text">
                    <HomeComponent image={images.sharkCover} title="Jawstronauts" text=""
                    />
                </div>
                <br />
                <br />
                <br />

<DictionaryEntry 
  word="Jawstronaut"
  pronunciation="/ˈdʒɔːs.trə.nɔːt/"
  partOfSpeech="noun"
  definition="An explorer who applies Earth Observation and ecological modeling to predict where sharks are likely to be, helping humans make informed choices that protect marine life and ocean resources."
/>

                <div className="mission-box">
                    {/* <MissionBox />   */}
                </div>

                <div className="term-boxes-container">
                    <TermBox
                        title="About Sharks"
                        text="Sharks play a crucial role in maintaining the health of marine ecosystems. By regulating the populations of other species, they help to ensure the balance of the ocean's food web."
                        link="/about-sharks"
                        buttonText="Why do sharks matter?"
                    />
                    <TermBox
                        title="Sharks & Space"
                        text="Help care for the sustainability of shark populations using space technology."
                        link="/sharks-and-space"
                        buttonText="Become a Jawstronaut!"
                    />

                </div>

                                <div className="term-boxes-container">
                                        <TermBox
                        title="Rethinking Shark Tags"
                        text="By looking to the remora, a small fish that effortlessly attaches to sharks, we draw inspiration for a bio-inspired tagging concept that is innovative, effective, and non-invasive."
                        link="/rethinking-shark-tags"
                        buttonText="Discover our innovative biomimetic tags"
                    />
                                        <TermBox
                        title="SharkGPTeeth"
                        text="SharkGPTeeth is your friendly companion, guiding you through the oceans and helping you explore shark behavior, habitats, and conservation."
                        link="/shark-gpteeth"
                        buttonText="Talk to a Shark!"
                    />
                    </div>

                {/* <WhoAreWeBox
                    image={images.Team}
                    alt="Group picture"
                /> */}
            </div>
            <Footer />
        </div>
    );
}