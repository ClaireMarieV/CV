import React from "react";
import Head from "next/head";
import Header from "./Header";

const Layout = ({ children }) => (
  <div className="layout">
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
          margin: 4rem;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          border: 0;
        }
        body {
          width: 100%;
          height: 100%;
          overflow-y: scroll;
          overflow-x: auto;
          color: #1d1d1d;
          background-color: #fbfbf9;
          font-family: roboto, sans-serif;
          font-style: normal;
          margin: 0;
          letter-spacing: 0.08rem;
          position: relative;
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
          font-size: 4rem;
        }

        h2 {
          font-size: 2rem;
          margin: 0;
          color: #442ceb;
          text-transform: lowercase;
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
          text-transform: uppercase;
        }
        p {
          font-weight: 300;
          text-align: justify;
          line-height: 2rem;
        }
        ul {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        ul > li {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        a {
          color: #373737;
          font-weight: 500;
        }
      `}
    </style>
  </div>
);

export default Layout;
