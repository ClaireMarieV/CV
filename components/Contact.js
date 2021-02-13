import React from "react";

const Experiences = () => (
  <div className="info">
    <div>
      <h2>Contact</h2>
      <div className="content-grid">
        <div className="grid">
          <span>Naissance</span>
          <span>le 21/08/1988</span>
        </div>
        <div className="grid">
          <span>Adresse</span>
          <ul>
            <li>31 rue des Jardiniers</li>
            <li>54000 - Nancy</li>
          </ul>
        </div>
        <div className="grid">
          <span>N° telephone</span>
          <span>06.25.67.11.23</span>
        </div>
        <div className="grid">
          <span>Adresse mail</span>
          <span>claire.marie.vaney@gmail.com</span>
        </div>
      </div>
    </div>
    <div className="training">
      <h2>Formations</h2>
      <ul>
        <li>
          <span>Certificat professionnel de Programmeur de site web :</span>
          <li>CNAM Nancy - Octobre 2018 / Juillet 2019</li>
        </li>
        <li>
          <span> M.A.N.A.A (Mise à Niveau en Arts Appliqués) :</span>
          <li>ORT Strasbourg - Septembre 2012 / Juin 2013</li>
        </li>
        <li>
          <span>Baccalauréat Professionnel Métiers de la Mode : </span>
          <li>Marie Marvingt Nancy - Septembre 2010 / Juin 2012</li>
        </li>
      </ul>
    </div>
    <style jsx>{`
      .training ul li:nth-child(2n) {
        margin-bottom: 1rem;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(2, 9rem);
        align-items: center;
      }
      .content-grid {
        margin-bottom: 3rem;
        margin-top: 1rem;
      }
      .training ul li:nth-child(1n) {
        font-weight: 800;
      }
    `}</style>
  </div>
);

export default Experiences;
