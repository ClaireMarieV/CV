const Skills = () => (
  <>
    <div className="competences">
      <section>
        <h2>Skills</h2>
      </section>
      <ul className="card">
        <li>
          <h4>Development</h4>
          <ul>
            <li>PHP</li>
            <ul className="frameworks">
              <li>Symfony</li>
            </ul>
            <li>Javascript/Typescript</li>
            <ul className="frameworks">
              <li>Next</li>
              <li>React Three Fiber</li>
              <li>Node</li>
            </ul>
            <li>MySQL</li>
            <li>Postgresql</li>
          </ul>
        </li>

        <li>
          <h4>Design</h4>
          <ul>
            <li>Wireframing</li>
            <li>Experience client</li>
            <li>Optimisation</li>
            <li>Interaction Design</li>
            <li>Interface Design</li>
            <li>User Design</li>
            <li>Adobe Illustrator</li>
            <li>Blender</li>
          </ul>
        </li>
      </ul>
    </div>

    <style jsx>{`
      ul > li > ul {
        margin-bottom: 1rem;
      }
      section {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      section > img {
        width: 5rem;
      }
      .competences {
        position: relative;
      }
      .img {
        position: absolute;
        left: 7rem;
        top: 33rem;
        z-index: 0;
      }
      .img img {
        max-width: 11rem;
      }
      .frameworks {
        padding-left: 1rem;
      }
    `}</style>
  </>
);
export default Skills;
