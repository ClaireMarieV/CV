import React from "react";
import Link from "next/link";

const Header = () => (
  <header>
    <nav>
      <div className="name">
        <div className="title">
          <h1>Claire Marie Vaney</h1>
          <h2>Développeuse Fullstack </h2>
          <h2> UX/UI Designer - Graphic Designer</h2>
        </div>
        <div className="img">
          <img src="/svg/pivoine.svg" />
        </div>
      </div>
      <div className="info">
        <span>lieu</span>
        <span>: Nancy</span>
        <span>téléphone</span>
        <span>: 06.25.67.11.23</span>
        <span>email</span>
        <span>: claire.marie.vaney@gmail.com</span>
        <span>social network</span>
        <section className="contact">
          <Link href="https://www.linkedin.com/in/claire-marie-vaney-383978104/">
            <a>
              <img src="/svg/linkedin.svg" />
            </a>
          </Link>
          <img src="/svg/github.svg" />
          <Link href="https://dribbble.com/ClaireMarie">
            <a>
              <span>Dribbble</span>
            </a>
          </Link>
        </section>
      </div>
    </nav>
    <div id="border">
      <img src="/svg/line.svg" />
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
      }

      h2 {
        margin: 0;
      }
      img {
        width: 100%;
        max-width: 1rem;
      }
      .name {
        border-right: 2px solid;
        padding: 3rem;
        position: relative;
      }

      .name .title {
        position: relative;
        z-index: 2;
      }

      .name .img {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
      }
      .name .img img {
        max-width: 20rem;
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
      .contact span{
        font-weight:600
      }
      #border img {
        max-width: 100%;
        width: 100vw;
      }
    `}</style>
  </header>
);

export default Header;
