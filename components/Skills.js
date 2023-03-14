const Skills = () => (
  <>
    <div className="img">
      <img src="/svg/pivoineYellow.svg" />
    </div>
    <div className="competences">
      <section>
        <h2>Competences</h2>
      </section>
      <ul className="card">
        <li>
          <h4>languages</h4>
          <ul>
            <li>PHP</li>
            <li>MySQL</li>
            <li>Javascript</li>
          </ul>
        </li>

        <li>
          <h4>Frameworks</h4>
          <ul>
            <li>ReactJs</li>
            <li>NodeJs</li>
            <li>Symfony</li>
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
        top: 32rem;
        z-index: 0;
      }
      .img img {
        max-width: 11rem;
      }
    `}</style>
  </>
);
export default Skills;
