const Projects = () => (
  <>
    <section>
      <div className="projects">
        <h2>Creative Work</h2>
        <ul className="card-projects">
          <li>
            <h4>
              Sci-Fi Title Sequence (Fictional Project for Netflix – 2025)
            </h4>
            <span>
              Created a 3D animated opening sequence for a fictional Netflix
              sci-fi series as part of a design course project. Focused on
              storytelling through stylized lighting, animation, and motion
              graphics using Blender (Eevee) and After Effects.
            </span>
            <spann></spann>
          </li>
          <li>
            <h4>Perrier 3D Commercial (Fictional Client Project – 2024)</h4>
            <span>
              Produced a 3D advertising video for Perrier as a fictional
              branding exercise.
            </span>
            <span>
              Designed realistic product renders and dynamic animations using
              Blender (Cycles) and After Effects.
            </span>
          </li>
        </ul>
      </div>
      <style jsx>{`
        section {
          display: flex;
          gap: 1rem;
        }
        .projects {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .card-projects {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin: 0;
        }

        .competences:nth-child(3) .card ul ul:nth-child(1) > li {
          font-weight: 600;
        }
        img {
          max-width: 2rem;
          align-self: baseline;
          margin-top: 0.5rem;
        }
      `}</style>
    </section>
  </>
);
export default Projects;
