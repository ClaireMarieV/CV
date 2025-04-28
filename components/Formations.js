const Experiences = () => (
  <>
    <section>
      <div>
        <div>
          <div className="training">
            <h2>Training</h2>
            <ul>
              <li>
                <h4>Icademie</h4>
                <h4>Motion Design – Bachelor’s Equivalent</h4>
                <span>2024/2025</span>
              </li>
              <li>
                <h4>CNAM</h4>
                <h4>Web Development - Associate Degree Equivalent</h4>
                <span>2018/2019</span>
              </li>
              <li>
                <h4>ORT</h4>
                <h4>Foundation Year in Applied Arts</h4>
                <span>2012/2013</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        section {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        ul li h3 {
          text-transform: uppercase;
        }
        ul {
          gap: 1rem;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </section>
  </>
);

export default Experiences;
