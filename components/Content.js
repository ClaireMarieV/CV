import React from "react";

const Content = ({ children }) => (
  <>
    <section className="flex-container">{children}</section>
    <style jsx>{`
      .flex-container {
        display: flex;
        justify-content: space-between;
        grid-gap: 6rem 10rem;
        margin-bottom: 4rem;
        margin-top: 4rem;
        width: 100%;
      }
    `}</style>
  </>
);
export default Content;
