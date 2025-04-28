const Experiences = () => (
  <>
    <section>
      <div className="experiences">
        <section>
          <h2>Creative Work</h2>
        </section>
        <ul className="card-projects">
          <li>
            <h4>
              Sci-Fi Title Sequence (Fictional project for Netflix – 2025)
            </h4>
            <ol className="project">
              <li>
                <span>
                  Designed a visual identity and cinematic compositions for a
                  fictional sci-fi series concept.
                </span>
              </li>
              <li>
                <span>
                  Focused on storytelling through minimalistic environments,
                  stylized lighting, and strong graphic compositions to convey
                  atmosphere and narrative.
                </span>
              </li>
              <li>
                <span>
                  The project aimed to create a distinctive and immersive
                  branding experience, enhancing viewer engagement and emotional
                  connection.
                </span>
              </li>
            </ol>
            <span>
              Skills used: Art Direction, Visual Storytelling, Composition,
              Color Theory, Branding for Entertainment
            </span>
            <span>Tools: Blender (Eevee), Adobe After Effects, Photoshop</span>
          </li>
          <li>
            <h4>Perrier 3D Commercial (Fictional client project – 2024)</h4>
            <ol className="project">
              <li>
                <span>
                  Created a series of realistic and dynamic visuals for a
                  fictional Perrier branding project.
                </span>
              </li>
              <li>
                <span>
                  Focused on showcasing the product through minimalist 3D
                  compositions, elegant lighting, and visual storytelling to
                  reinforce brand identity and emotional appeal.
                </span>
              </li>
              <li>
                <span>
                  The project aimed to enhance product perception by combining
                  aesthetic refinement with strong, recognizable imagery.
                </span>
              </li>
            </ol>
            <span>
              Skills used: Art Direction, Product Visualization, Branding,
              Visual Storytelling, Composition, Lighting Design
            </span>
            <span>Tool: Blender (Cycles)</span>
          </li>
          <li>
            <h4>
              Obaa — Customizable Illustration Pack for UI and Branding (2023)
            </h4>
            <ol className="project">
              <li>
                <span>
                  Designed a package of customizable illustrations available in
                  multiple formats (SVG, PNG, JPG, AI, EPS) to meet the needs of
                  UI/UX designers and brands.
                </span>
              </li>
              <li>
                <span>
                  Focused on creating minimalistic visuals that represent
                  universal activities to foster emotional connection and
                  inclusivity
                </span>
              </li>

              <li>
                <span>
                  The project enhances user interfaces by simplifying complex
                  ideas, improving engagement, and establishing a unique visual
                  identity across websites and applications.
                </span>
              </li>
            </ol>
            <span>
              Skills used : Illustration, Branding, Visual Storytelling, UI
              Design Support
            </span>
            <span>Tool: Adobe Illustrator</span>
          </li>
        </ul>
      </div>

      <style jsx>{`
        section {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .card-projects {
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 3rem;
          list-style: inside;
        }

        .project {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        ol {
          list-style: inside;
        }
        .achievements {
          padding: 0;
          width: 50vw;
        }
      `}</style>
    </section>
  </>
);

export default Experiences;
