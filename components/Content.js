import React from "react";

const Content = ({ children }) => (
  <>
    <div className="grid-container">{children}</div>
    <style jsx>{`
      .grid-container {
        display: grid;
        grid-template-columns: repeat(2, 0.5fr);
        grid-gap: 6rem 10rem;
        margin-bottom: 4rem;
        margin-top: 4rem;
      }
    `}</style>
  </>
);
export default Content;
