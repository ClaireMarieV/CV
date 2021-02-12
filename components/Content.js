import React from "react";

const Content = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        width: 70vw;
        gap: 10rem;
        margin: 4rem auto 4rem auto;
      }
    `}</style>
  </div>
);
export default Content;
