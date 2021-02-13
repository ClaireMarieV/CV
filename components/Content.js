import React from "react";

const Content = ({ children }) => (
  <div className="container">
    <div className="grid-container">{children}</div>
    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: 1fr;
        margin: auto;
        width: 80vw;
        justify-items: center;
        margin-bottom: 4rem;
      }
      .grid-container {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-gap: 1rem 10rem;
        margin-bottom: 4rem;
        margin-top: 4rem;
      }
    `}</style>
  </div>
);
export default Content;
