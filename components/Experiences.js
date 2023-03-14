const Experiences = () => (
  <>
    <div className="img">
      <img src="/svg/pivoineYellow.svg" />
    </div>
    <div className="experiences">
      <section>
        <h2>experiences</h2>
      </section>
      <ul>
        <li>
          <span>AVR 2020 - NOW</span>
          <span>
            Freelance développeuse fullstack - UX/UI et Graphic Designer
          </span>
        </li>
        <li>
          <span>SEP 2020 OCT 2020</span>
          <span>Développeuse front-end / Integratrice : </span>
          Psychologue
        </li>
        <li>
          <span>OCT 2019 MAR 2020</span>
          <span>Développeuse fullstack : </span>Via Mobilis
        </li>
        <li>
          <span>MAI 2019 JUIL 2019</span>
          <span>Développeuse fullstack : </span>Assurandis
        </li>
      </ul>
    </div>

    <style jsx>{`
      .experiences ul li:nth-child(2n) {
        margin-bottom: 1rem;
      }
      .experiences ul {
        gap: 2rem;
      }
      section {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      section > img {
        width: 5rem;
      }
      .experiences ul li > span {
        text-transform: uppercase;
      }
      .experiences ul li > span:nth-child(1) {
        font-weight: 500;
      }
      .img {
        position: absolute;
        top: 81rem;
        left: 49rem;
      }
      .img img {
        max-width: 11rem;
      }
    `}</style>
  </>
);

export default Experiences;
