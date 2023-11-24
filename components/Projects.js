const Projects = () => (
  <>
    <section>
      <div className="projects">
        <h2>projects</h2>
        <ul className="card-projects">
          <li>
            <h4>SaaS - React</h4>
            <span> ogme.io</span>
          </li>
          <li>
            <h4>E.Leclerc vehicle rental - Symfony</h4>
            <span>location.assurandis.com</span>
          </li>
          <li>
            <h4>Group travel planner - react/typescript</h4>
          </li>
          <li>
            <h4>Blob generator - React</h4>
            <div>organicblob.com</div>
          </li>
          <li>
            <h4>OBAAA - Illustrator</h4>
            <div>https://clairemariev.gumroad.com/l/obaaa</div>
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
