import About from "./Resume";

const Header = () => (
  <>
    <section>
      <div className="name">
        <div className="title">
          <div>
            <h2>claire marie vaney</h2>
            <h2 className="black">fullstack developer &</h2>
            <h2 className="black">visual designer</h2>
          </div>
        </div>
        <About />
      </div>
      <div className="info">
        <h2>contact</h2>
        <div className="informations">
          <img src="/svg/localisation.svg" /> <span>Nancy - France</span>
        </div>
        <div className="informations">
          <img src="/svg/roundStar.svg" /> <span>06.25.67.11.23</span>
        </div>

        <div className="informations">
          <img src="/svg/arrow.svg" /> <span>claire.marie.vaney@gmail.com</span>
        </div>

        <div className="contact">
          <div id="portfolio">
            <img src="/svg/kaboom.svg" />
            <span className="portfolio">clairemarievaney.com</span>
          </div>
          <div className="socials">
            <img src="/svg/social/linkedin.svg" />
            <img src="/svg/social/github.svg" />
            <img src="/svg/social/instagram.svg" />
            <span>Dribbble</span>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{`
      section {
        display: flex;
        gap: 2rem;
        align-items: baseline;
        justify-content: space-between;
        padding: 4rem 0;
      }

      h2 {
        margin: 0;
      }

      .black {
        color: black;
        font-weight: 400;
      }

      .name > .svg > img {
        max-width: 8rem !important;
      }

      .portfolio {
        font-weight: 600;
        color: #442ceb;
      }

      #portfolio {
        display: flex;
        gap: 0.5rem;
        align-items: baseline;
      }
      #portfolio > img {
        max-width: 2rem;
      }

      img {
        width: 100%;
        max-width: 1rem;
      }

      .name {
        display: flex;
        gap: 1rem;
        flex-direction: column;
      }

      .name .title {
        position: relative;
        z-index: 2;
      }
      .informations {
        display: flex;
        gap: 0.5rem;
        align-items: baseline;
      }
      .informations > img {
        max-width: 1.5rem;
      }
      .motion {
        max-width: 25rem;
      }

      .bloc > img {
        max-width: 90vw;
      }

      .name .img img {
        max-width: 20rem;
      }
      .info {
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
        justify-self: start;
        align-self: baseline;
        padding-right: 11.5rem;
      }

      .contact {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;
      }
      .socials {
        display: flex;
        justify-content: space-between;
        padding-left: 2.5rem;
      }

      .contact span {
        font-weight: 600;
      }
      #border img {
        max-width: 100%;
        width: 100vw;
      }
    `}</style>
  </>
);

export default Header;
