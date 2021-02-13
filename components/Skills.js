import React from "react";
import Link from "next/link";

const Skills = () => (
  <div className="competences">
    <h2>Compétences:</h2>

    <ul className="card">
      <li>
        <h3>Langages informatique</h3>
        <ul>
          <li>PHP</li>
          <li>MySQL</li>
          <li>NodeJs</li>
          <li>Javascript</li>
        </ul>
      </li>

      <li>
        <h3>Frameworks</h3>
        <ul>
          <li>React</li>
          <li>Symfony</li>
          <li>Eleventy</li>
        </ul>
      </li>

      <li>
        <h3>Design</h3>
        <ul>
          <li>CSS</li>
          <li>Wireframing</li>
          <li>Photoshop</li>
          <li>Adobe Illustrator</li>
        </ul>
      </li>
    </ul>
    <style jsx>{`
      ul {
        margin-bottom: 1rem;
      }
    `}</style>
  </div>
);
export default Skills;
