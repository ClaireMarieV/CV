const Experiences = () => (
  <>
    <section>
      <div>
        <div>
          <div className="training">
            <h2>trainings</h2>
            <ul>
              <li>
                <h4>Titre Professionnel concepteur developpeur</h4>
                <span>2018/2019</span>
              </li>
              <li>
                <h4>Mise à Niveau en Arts Appliqués</h4>
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

        img {
          max-width: 2rem;
          align-self: baseline;
          margin-top: 0.5rem;
        }
      `}</style>
    </section>
  </>
);

export default Experiences;
