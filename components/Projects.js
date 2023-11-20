const Projects = () => (
  <>
    <div className="projects">
      <h2>Projects</h2>
      <ul className="card projects">
        <li>
          <h4>Longines Riviera Homepage -</h4>
          <span>HTML/CSS/GSAP </span>
        </li>
        <li>
          <h4>SaaS -</h4>
          <span>React : ogme.io</span>
        </li>
        <li>
          <h4>Portfolio -</h4>
          <span>React : clairemarievaney.com</span>
        </li>
        <li>
          <h4>E.Leclerc vehicle rental -</h4>
          <span>Symfony : location.assurandis.com</span>
        </li>
        <li>
          <h4>Group travel planner -</h4>
          <span>React/Typescript/Vanilla-extract</span>
        </li>
        <li>
          <h4>Blob generator -</h4>
          <div>React : organicblob.com</div>
        </li>
        <li>
          <h4>OBAAA -</h4>
          <div>Illustrator : https://clairemariev.gumroad.com/l/obaaa</div>
        </li>
      </ul>
    </div>

    <style jsx>{`
      ul li {
        margin-bottom: 1rem;
      }
      .competences:nth-child(3) .card ul ul:nth-child(1) > li {
        font-weight: 600;
      }
      .img {
        position: absolute;
        left: 49rem;
        top: 34rem;
        z-index: 0;
      }
      .img img {
        max-width: 11rem;
      }
    `}</style>
  </>
);
export default Projects;
