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
                        title="Why do sharks matter?"
                        text="Sharks play a crucial role in maintaining the health of marine ecosystems. By regulating the populations of other species, they help to ensure the balance of the ocean's food web."
                        link="/about-sharks"
                    />
                    <TermBox
                        title="Become a Jawstronaut!"
                        text="Help care for the sustainability of shark populations using space technology."
                        link="/sharks-and-space"
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