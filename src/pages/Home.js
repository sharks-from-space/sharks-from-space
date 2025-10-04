import { WebsiteNavbar, HomeComponent, FlagChain, Footer, TermBox, WhoAreWeBox, MissionBox } from "../components";
import * as images from "../images/home";

export function Home() {
    return (
        <div className="PageContainer">
            <WebsiteNavbar />
            <div className="PageContent">

                <div className="intro-text">
                    <HomeComponent image={images.WhiteSharkCover} title="Sharks From Space" text=""
                    />
                </div>

                <div className="mission-box">
                    <MissionBox />  
                </div>

                <div className="term-boxes-container">
                    <TermBox
                        title="Why do sharks matter?"
                        text="Sharks play a crucial role in maintaining the health of marine ecosystems. By regulating the populations of other species, they help to ensure the balance of the ocean's food web."
                        link="/about-sharks"
                    />
                    <TermBox
                        title="Understanding shark behavior through technology"
                        text="Enabling humans to care for the sustainability of shark populations."
                        link="/research"
                    />
                </div>

                <WhoAreWeBox
                    image={images.Team}
                    alt="Group picture"
                />
            </div>
            <Footer />
        </div>
    );
}