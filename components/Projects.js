const Projects = () => (
  <>
    <div className="img">
      <img src="/svg/pivoineYellow.svg" />
    </div>
    <div className="projects">
      <h2>Projets</h2>
      <ul className="card projects">
        <li>
          <ul>
            <li>
              <h4>Longines Riviera Homepage -</h4>
              <span>HTML/CSS/GSAP </span>
            </li>
            <li>
              <h4>SaaS -</h4>
              <span>NextJS/ReactJS : ogme.io</span>
            </li>
            <li>
              <h4>Portfolio -</h4>
              <span>NextJS/ReactJS : clairemarievaney.com</span>
            </li>
            <li>
              <h4>location de véhicules E.Leclerc -</h4>
              <span>Symfony : location.assurandis.com</span>
            </li>
            <li>
              <h4>vitrine pour une psychologue -</h4>
              <span>Elevently : psychologue-alicefelt.fr</span>
            </li>
            <li>
              <h4>générations de blobs -</h4>
              <div>NextJS/ReactJS : organicblob.com</div>
            </li>
            <li>
              <h4>Ecommerce -</h4>
              <div>NextJS/Strapi</div>
            </li>
          </ul>
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
        top: 33rem;
        z-index: 0;
      }
      .img img {
        max-width: 11rem;
      }
    `}</style>
  </>
);
export default Projects;
