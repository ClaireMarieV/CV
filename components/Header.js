import React from "react";
import Link from "next/link";

const Header = () => (
  <header>
    <div className="name">
      <h1>Claire Marie Vaney</h1>
      <h2>Développeuse front-end </h2>
    </div>
    <div className="contact">
      <Link href="mailto:claire.marie.vaney@gmail.com">
        <a>
          <img src="/svg/mail.svg" />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/claire-vaney-383978104">
        <a target="_blank">
          <img src="/svg/linkedin.svg" />
        </a>
      </Link>
      <Link href="https://twitter.com/VaneyClaire">
        <a target="_blank">
          <img src="/svg/twitter.svg" />
        </a>
      </Link>
      <Link href="https://github.com/ClaireMarieV">
        <a target="_blank">
          <img src="/svg/github.svg" />
        </a>
      </Link>
    </div>
    <style jsx>{`
      .name {
        display: grid;
        justify-items: center;
      }
      h2 {
        margin: 0;
      }
      img {
        width: 2rem;
      }
      .contact {
        display: flex;
        justify-content: space-evenly;
        margin-top: 2rem;
      }
    `}</style>
  </header>
);

export default Header;
