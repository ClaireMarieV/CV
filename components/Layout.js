import React from "react";

const Layout = ({ children }) => (
  <div className="layout">
    <link rel="stylesheet" href="https://use.typekit.net/drd3nqt.css"></link>

    <div
      style={{
        margin: `0 auto`,
      }}
    >
      <main>{children}</main>
    </div>
    <style jsx global>
      {`
        html {
        }
        main {
          margin: 4rem;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          border: 0;
        }
        body {
          width: 100vw;
          height: 100%;
          color: #1d1d1d;
          font-family: roboto, sans-serif;
        }

        img {
          overflow: hidden;
          border: 0;
          width: 100%;
        }
        a {
          text-decoration: none;
        }
        table {
        }
        h1,
        h2 {
          font-weight: 400;
          font-style: normal;
          text-transform: uppercase;
        }
        h1 {
          letter-spacing: 0.15rem;
          font-size: 3rem;
          margin: 0;
        }

        h2 {
          font-size: 2rem;
          margin: 0;
          text-transform: capitalize;
          font-weight: 500;
        }

        h3 {
          font-weight: 400;
          font-style: normal;
          font-size: 1.5rem;
          letter-spacing: 0.08rem;
          margin: 0;
        }

        h4 {
          font-weight: 600;
          margin: 0;
          text-transform: capitalize;
        }
        p {
          font-weight: 300;
          text-align: justify;
          line-height: 2rem;
        }

        ul > li {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        a {
          font-weight: 500;
          color: black;
        }
      `}
    </style>
  </div>
);

export default Layout;
