import React from "react";

const Experiences = () => (
  <div className="experiences">
    <h2>Experiences</h2>
    <ul>
      <li>
        <span>FEV 2021</span>
      </li>
      <li>
        <span>Freelance développeuse full - stack : </span>FelicityLab
      </li>
      <li>
        <span>SEP 2020 OCT 2020</span>
      </li>
      <li>
        <span> Bénévole développeuse front-end / Integratrice : </span>
        Psychologue
      </li>
      <li>
        <span>OCT 2019 MAR 2020</span>
      </li>
      <li>
        <span>Developpeuse full - stack : </span>Via Mobilis
      </li>
      <li>
        <span>MAI 2019 JUIL 2019</span>
      </li>
      <li>
        <span>Stage développeuse full - stack : </span>Assurandis
      </li>
      <li>
        <span>AVR 2018 SEP 2018</span>
      </li>
      <li>
        <span>Serveuse :</span> Brasserie du Parc Ste Marie
      </li>
      <li>
        <span>AOU 2014 SEP 2017</span>
      </li>
      <li>
        <span>Aide de cuisine : </span>Marcotullio/Extras
      </li>
      <li>
        <span>JAN 2014 JUI 2014</span>
      </li>
      <li>
        <span>Accompagnatrice/art-thérapeute : </span>AFTC
      </li>
    </ul>
    <style jsx>{`
      .experiences ul li:nth-child(2n) {
        margin-bottom: 1rem;
      }

      .experiences ul li > span {
        font-weight: 800;
      }
    `}</style>
  </div>
);

export default Experiences;
