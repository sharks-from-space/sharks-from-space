import { WebsiteNavbar, Footer, ResourcesComponent, TextComponent, CodeBlock } from "../components";
const sharkSchemaWithComments = `{
  "sharkID": "string",          // Unique ID for each shark
  "species": "string",          // Scientific name
  "vernacularName": "string",   // Common name
  "location": {
    "latitude": "number",
    "longitude": "number"
  },
  "depthMeters": "number",      // Depth of observation
  "observationType": "string",  // e.g., tagDetection, visualSighting, acousticDetection
  "observationStart": "ISO8601 timestamp", // Start time
  "observationEnd": "ISO8601 timestamp",   // End time if applicable
  "observer": "string",         // Person or project
  "source": "string",           // e.g., satellite, tag, field survey
  "notes": "string"             // Additional details
}`;

export function Contributing() {
    return (
        <div className="PageContainer">
          <WebsiteNavbar />
          
          <div className="PageContent">
            				<h2 className="term-title">Contributing</h2>

            <TextComponent text={
                  <p>
                    We invite researchers, citizen scientists, and Jawstronauts to contribute shark observations using a <strong>unified, shark-focused data format</strong>. Our standard prioritises high-resolution temporal tracking, allowing each shark sighting or tag detection to be accurately timestamped and geolocated, simplifying data access and helping compile datasets for predictive models of movement and foraging.
                  </p>
                } />
          </div>

<CodeBlock 
  code={sharkSchemaWithComments}
  language="json"
  title="Shark Observation Data Schema"
    preserveComments={true}

/>
          <Footer />
        </div>
      );
}