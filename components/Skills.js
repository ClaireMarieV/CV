const Skills = () => (
  <>
    <div className="competences">
      <section>
        <h2>skills</h2>
      </section>

      <ul className="card">
        <li className="chart">
          <img src="/svg/chart.svg" />
        </li>
        <li>
          <ul>
            <li>French: fluent</li>
            <li>English: fluent</li>
            <li>Italian: A2</li>
          </ul>
        </li>
        <li>
          <ul className="langage">
            <li>
              <span>PHP</span>
            </li>
            <li>
              <span>Symfony</span>
            </li>
          </ul>
        </li>
        <ul className="frameworks">
          <li>
            <ul className="langage">
              <li>
                <span>Javascript</span>
              </li>
              <li>
                <span>Typescript</span>
              </li>
              <li>
                <span>Next</span>
              </li>
              <li>
                <span>React Three Fiber</span>
              </li>
              <li>
                <span>Node</span>
              </li>
            </ul>
          </li>
          <li>
            <ul className="langage">
              <li>
                <span>Databases</span>
              </li>
              <li>
                <span>MySQL</span>
              </li>
              <li>
                <span>Postgresql</span>
              </li>
              <li>
                <span>Prisma</span>
              </li>
              <li>
                <span>MongoDB</span>
              </li>
            </ul>
          </li>
        </ul>
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

      .langage > li:first-child {
        font-weight: 600;
      }
      .chart {
        width: 35rem;
      }
      .evaluate {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
      }
      .evaluate > div {
        border-radius: 50%;
        background: blue;
        width: 0.5rem;
        height: 0.5rem;
      }

      .img {
        position: absolute;
        left: 7rem;
        top: 36rem;
        z-index: 0;
      }

      .frameworks {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    `}</style>
  </>
);
export default Skills;
