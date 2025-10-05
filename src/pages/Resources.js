import { WebsiteNavbar, Footer, ResourcesComponent } from "../components";

export function Resources() {
    const references = [
      {
        title: "Nature",
        description: "Mechanical underwater adhesive devices for soft substrates",
        url:"https://www.nature.com/articles/s41586-025-09304-4"

      },
            {
        title: "Environmental Biology of Fishes",
        description: "Observations of skin color aberrations in four shark species off the coast of southern California, USA",
        url:"https://www.researchgate.net/publication/379130922_Observations_of_skin_color_aberrations_in_four_shark_species_off_the_coast_of_southern_California_USA"

      },
                  {
        title: "The University of Western Australia",
        description: "Are white patches on whale shark skin cause for concern?",
        url:"https://www.uwa.edu.au/news/article/2024/september/are-white-patches-on-whale-shark-skin-cause-for-concern"

      },
                        {
        title: "Journal of Fish Biology",
        description: "Observations of hypomelanosis in the nurse shark Ginglymostoma cirratum",
        url:"https://www.researchgate.net/publication/364154860_Observations_of_hypomelanosis_in_the_nurse_shark_Ginglymostoma_cirratum"

      },

                        {
        title: "Wikipedia",
        description: "Argos (satellite system)",
        url:"https://en.wikipedia.org/wiki/Argos_(satellite_system)"

      },
                        {
        title: "Sparkfun",
        description: "ARGOS Satellite Transceiver Shield - ARTIC R2",
        url:"https://www.sparkfun.com/argos-satellite-transceiver-shield-artic-r2.html"

      },
        {
            title: "NASA",
            description: "Plankton Aerosols Clouds and Ecosystems data for phytoplankton abundance and community composition",
            url: "https://pace.gsfc.nasa.gov/"
        },
        {
            title: "NASA",
            description: "Moderate Resolution Imaging Spectroradiometer (MODIS)-Aqua data for phytoplankton abundance",
            url: "https://modis.gsfc.nasa.gov/data/"
        },
        {
            title: "NASA",
            description: "Surface Water and Ocean Topography (SWOT)",
            url: "https://podaac.jpl.nasa.gov/SWOT"
        },
        {
            title: "NASA",
            description: "Mesoscale eddies release pelagic sharks from thermal constraints to foraging in the ocean twilight zone",
            url: "https://www.pnas.org/doi/abs/10.1073/pnas.1903067116"
        },
        {
            title: "NASA",
            description: "Mesoscale eddies influence the movements of mature female white sharks in the Gulf Stream and Sargasso Sea",
            url: "https://www.nature.com/articles/s41598-018-25565-8"
        }
    ];

    const contacts = [
        {
            name: "David Salmon",
            title: "Chief Technology Jawstronaut",
            linkedin: "https://linkedin.com/in/davidsalmon13"
        },
        {
            name: "Monique Grinstein",
            title: "Chief Executive Jawstronaut",
            linkedin: "https://linkedin.com/in/moniquegrinstein"
        }
        // Add more team members as needed
    ];

    return (
        <div className="PageContainer">
          <WebsiteNavbar />
          <div className="PageContent">
            <ResourcesComponent references={references} contacts={contacts} />
          </div>
          <Footer />
        </div>
      );
}