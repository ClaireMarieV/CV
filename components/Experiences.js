import React from "react";

const Experiences = () => (
  <div className="experiences">
    <section>
      <h2>Experiences</h2>
    </section>
    <ul>
      <li>
        <span>AVR 2020 - NOW</span>
        <span>Freelance développeuse fullstack - UX / UI Designer</span>
      </li>
      <li>
        <span>SEP 2020 OCT 2020</span>
        <span> Bénévole développeuse front-end / Integratrice : </span>
        Psychologue
      </li>
      <li>
        <span>OCT 2019 MAR 2020</span>
        <span>Developpeuse fullstack : </span>Via Mobilis
      </li>
      <li>
        <span>MAI 2019 JUIL 2019</span>
        <span>Développeuse fullstack : </span>Assurandis
      </li>
    </ul>
    <style jsx>{`
      .experiences ul li:nth-child(2n) {
        margin-bottom: 1rem;
      }
      .experiences ul {
        gap: 2rem;
      }
      section {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      section > img {
        width: 5rem;
      }
      .experiences ul li > span {
        text-transform: uppercase;
      }
      .experiences ul li > span:nth-child(1) {
        font-weight: 500;
      }
    `}</style>
  </div>
);

export default Experiences;
