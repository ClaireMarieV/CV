import React from "react";
import Head from "next/head";
import Header from "./Header";

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <link rel="stylesheet" href="https://use.typekit.net/drd3nqt.css"></link>

    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1400,
      }}
    >
      <main>{children}</main>
    </div>
    <style jsx global>
      {`
        html {
          overflow: hidden;
          height: 100%;
        }
        main {
          height: 100vh;
        }
        html,
        body {
          margin: 0;
          padding: 0;
          border: 0;
          color: #26332e;
        }
        body {
          width: 100%;
          height: 100%;
          overflow-y: scroll;
          overflow-x: hidden;
          height: 100%;
          color: #1d201f;

          margin: 0;
          overscroll-behavior: none;
          perspective: 1px;
          transform-style: preserve-3d;
        }
        ::-webkit-scrollbar {
          scrollbar-width: 5px;
        }
        /* Track */
        ::-webkit-scrollbar-track {
        }
        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: rgba(79, 71, 78, 0.8);
        }
        img {
          overflow: hidden;
          border: 0;
          width: 100%;
        }
        a {
          text-decoration: none;
        }
        h1,
        h2 {
          font-family: mr-eaves-modern, sans-serif;
          font-weight: 400;
          font-style: normal;
        }
        h1 {
          letter-spacing: 0.15rem;
          font-size: 3rem;
        }
        h2 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        h3 {
          font-weight: 800;
          font-style: normal;
          padding: 1rem;
          margin: 0;
        }
        h4 {
        }
        h4 {
          font-size: 1rem;
          font-weight: 500;
        }
        p {
          font-weight: 300;
          font-size: 1.5rem;
          text-align: justify;
          line-height: 2rem;
        }
        ul {
          list-style: none;
          padding: 0;
          font-weight: 800;
        }
        span {
          font-weight: 800;
          font-family: graphie, sans-serif;
        }
        button {
          font-size: 1.3rem;
          width: 10rem;
          height: 10rem;
          border-radius: 50%;
          padding: 1.5rem;
          border: 2px solid #f9f5fa;
          background-color: transparent;
          letter-spacing: 0.1rem;
          margin: 0;
          color: #1d201f;
          justify-self: right;
        }
      `}
    </style>
    <style jsx>{``}</style>
  </div>
);

export default Layout;
