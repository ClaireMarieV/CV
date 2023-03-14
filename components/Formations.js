import React from "react";
import Link from "next/link";

const Experiences = () => (
  <>
    <div className="img">
      <img src="/svg/pivoineYellow.svg" />
    </div>
    <div>
      <div className="training">
        <h2>Formations</h2>
        <ul>
          <li>
            <span>Octobre 2018 - Juillet 2019</span>
            <span>Certificat Professionnel Développeur web </span>
          </li>
          <li>
            <span>Sept 2012 - Jui 2013</span>
            <span> M.A.N.A.A (Mise à Niveau en Arts Appliqués) </span>
          </li>
          <li>
            <span>Sept 2010 - Jui 2012</span>
            <span>Baccalauréat Professionnel Métiers de la Mode </span>
          </li>
        </ul>
      </div>
    </div>

    <style jsx>{`
      .training ul {
        gap: 2rem;
      }

      .training ul li:nth-child(1n) {
        text-transform: uppercase;
      }

      img {
        width: 2rem;
      }
    `}</style>
  </div>
);

export default Experiences;
