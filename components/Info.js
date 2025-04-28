const Name = () => (
  <section className="info">
    <div className="name">
      <span>CLAIRE MARIE VANEY</span>
      <a href="mailto:claire.marie.vaney@gmail.com">
        <span>claire.marie.vaney@gmail.com</span>
      </a>

      <a href="https://clairemarievaney.com">
        <span>clairemarievaney.com</span>
      </a>
    </div>

    <div className="contact">
      <span>Nancy - France</span>
      <a
        className="linkedin"
        href="https://www.linkedin.com/in/claire-marie-vaney-383978104/"
        target="_blank"
      >
        <img src="/svg/social/linkedin.svg" />
      </a>
    </div>

    <style jsx>{`
      .info {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }

      .name,
      .contact {
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
      }
      img {
        color: black;
        width: 1.5rem;
      }
    `}</style>
  </section>
);
export default Name;
