import React from "react";
import Link from "next/link";

const Skills = () => (
  <div className="competences">
    <section>
      <h2>Skills</h2>
    </section>
    <ul className="card">
      <li>
        <h4>languages</h4>
        <ul>
          <li>PHP</li>
          <li>MySQL</li>
          <li>Javascript</li>
        </ul>
      </li>

      <li>
        <h4>Frameworks</h4>
        <ul>
          <li>ReactJs</li>
          <li>NodeJs</li>
          <li>VueJs</li>
          <li>Symfony</li>
          <li>Eleventy</li>
        </ul>
      </li>

      <li>
        <h4>Design</h4>
        <ul>
          <li>Wireframing</li>
          <li>Experience client</li>
          <li>Optimisation</li>
          <li>Interaction Design</li>
          <li>User Design</li>
          <li>Photoshop</li>
          <li>Adobe Illustrator</li>
        </ul>
      </li>
    </ul>
    <style jsx>{`
      ul > li > ul {
        margin-bottom: 1rem;
      }
      section {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      section > img {
        width: 5rem;
      }
    `}</style>
  </div>
);
export default Skills;
