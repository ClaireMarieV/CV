import React from "react";

const Experiences = () => (
  <>
    <div className="img">
      <img src="/svg/pivoineYellow.svg" />
    </div>
    <div className="training">
      <h2>formations</h2>
      <ul>
        <li>
          <span>Octobre 2018 - Juillet 2019</span>
          <span>Professional Certificate web developer </span>
        </li>
        <li>
          <span>Sept 2012 - Jui 2013</span>
          <span> M.A.N.A.A (applied arts) </span>
        </li>
        <li>
          <span>Sept 2010 - Jui 2012</span>
          <span>Baccalauréat Professionnel Métiers de la Mode </span>
        </li>
      </ul>
    </div>

    <style jsx>{`
      .training ul {
        gap: 2rem;
      }

      .training ul li:nth-child(1n) {
        text-transform: uppercase;
      }

      .img {
        position: absolute;
        top: 87rem;
        left: 46rem;
      }
      .img img {
        max-width: 11rem;
      }
    `}</style>
  </>
);

export default Experiences;
