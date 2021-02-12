import React from "react";

const Experiences = () => (
  <div className="info">
    <div>
      <h2>Contact</h2>
      <table>
        <tr>
          <td>
            <span>Naissance</span>
          </td>
          <td>
            <span>le 21/08/1988</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>Adresse</span>
          </td>
          <td>
            <ul>
              <li>31 rue des Jardiniers</li>
              <li>54000</li>
              <li>Nancy</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <span>N° telephone</span>
          </td>
          <td>
            <span>06.25.67.11.23</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>Adresse mail</span>
          </td>
          <td>
            <span>claire.marie.vaney@gmail.com</span>
          </td>
        </tr>
      </table>
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
    `}</style>
  </div>
);

export default Experiences;
