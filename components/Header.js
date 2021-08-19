import React from "react";
import Link from "next/link";

const Header = () => (
  <header>
    <nav>
      <div className="name">
        <h1>Claire Marie Vaney</h1>
        <h2>Développeuse front-end </h2>
        <h2> UX/UI Designer</h2>
      </div>
      <div className="info">
        <span>adresse</span>
        <span>: 31 rue des Jardiniers - 54000 - Nancy</span>
        <span>telephone</span>
        <span>: 06.25.67.11.23</span>
        <span>email</span>
        <span>: claire.marie.vaney@gmail.com</span>
        <span>social network</span>
        <section className="contact">
          <img src="/svg/linkedin.svg" />
          <img src="/svg/github.svg" />
        </section>
      </div>

      <style jsx>{`
        nav {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 2rem;
          align-items: center;
          justify-items: center;
          padding-bottom: 4rem;
          margin: 0 6rem;
          border-bottom: 1px solid lightgray;
        }

        h2 {
          margin: 0;
        }
        img {
          width: 1rem;
        }
        .name {
          border-right: 2px solid;
          padding: 3rem;
        }
        .info {
          display: grid;
          grid-template-columns: repeat(2, auto);
          row-gap: 1rem;
          column-gap: 6rem;
          justify-self: start;
          align-self: end;
        }
        .info > span:nth-child(odd) {
          text-transform: uppercase;
          font-weight: 500;
        }
        .contact {
          display: flex;
          justify-content: space-around;
        }
      `}</style>
    </nav>
  </header>
);

export default Header;
