const Experiences = () => (
  <>
    <section>
      <div className="experiences">
        <section>
          <h2>experiences</h2>
        </section>
        <ul>
          <li>
            <div className="weight">
              <span>Freelance fullstack developer </span>
              <span>& visual Designer</span>
            </div>

            <span>avril 2020 - now</span>
          </li>
          <li>
            <span>frontend developer & Integrator</span>
            <span>Psychologue, 09/2020 - 10/2020</span>
          </li>

          <li>
            <span>fullstack developer</span>
            <span>Via Mobilis, 10/2019 - 03/2020</span>
          </li>
          <li>
            <span>fullstack developer</span>
            <span>Assurandis, 05/2019 - 08/2019</span>
          </li>
        </ul>
      </div>

      <style jsx>{`
        section {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        section > img {
          width: 5rem;
        }
        .experiences ul li > span:first-child {
          text-transform: uppercase;
        }
        .experiences ul li > span:nth-child(1) {
          font-weight: 600;
        }
        .weight {
          text-transform: uppercase;
          font-weight: 600;
          flex-direction: column;
          display: flex;
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
