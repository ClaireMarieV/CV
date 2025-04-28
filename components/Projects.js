const Projects = () => (
  <>
    <section>
      <div className="projects">
        <h2>Creative Work</h2>
        <ul className="card-projects">
          <li>
            <h4>
              Icademie - Perrier Project - Solo Project | 01.03.25 - 03.21.25
            </h4>
            <span>
              Conceptualized, designed, and animated a 30 seconds animated short
              video for social media from start to finish.
            </span>
            <span>
              Created storyboards and style frames to plan the visual direction.
            </span>
            <span>
              Designed and animated graphics using Adobe Illustrator, InDesiign
              and Blender.
            </span>
            <span>
              Edited sound design and synchronized animations for a polished
              final result.
            </span>
            <span>
              Managed the entire creative pipeline, from ideation to final
              rendering.
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
