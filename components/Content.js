import React from "react";

const Content = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        width: 80vw;
        margin: 4rem auto 4rem auto;
        grid-gap: 2rem;
      }
    `}</style>
  </div>
);
export default Content;
