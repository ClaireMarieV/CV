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
        <a>
          <img src="/svg/linkedin.svg" />
        </a>
      </Link>
      <Link href="https://twitter.com/VaneyClaire">
        <a>
          <img src="/svg/twitter.svg" />
        </a>
      </Link>
      <Link href="https://github.com/ClaireMarieV">
        <a>
          <img src="/svg/github.svg" />
        </a>
      </Link>
    </div>
    <style jsx>{`
      header {
        display: grid;
        justify-content: center;
      }
      .name {
        display: grid;
        justify-content: center;
      }
    `}</style>
  </header>
);

export default Header;
