import React from "react";
import Link from "next/link";

const Skills = () => (
  <div className="competences">
    <h2>SKILLS</h2>

    <ul className="card">
      <li>
        <ul>
          <li>PHP</li>
          <li>MySQL</li>
          <li>NodeJs</li>
          <li>Javascript</li>
        </ul>
      </li>

      <li>
        <ul>
          <li>React</li>
          <li>Symfony</li>
          <li>Eleventy</li>
          <li>Strapi</li>
          <li>Wordpress</li>
        </ul>
      </li>

      <li>
        <ul>
          <li>Wireframing</li>
          <li>Experience client</li>
          <li>Optimisation</li>
          <li>Interface Design</li>
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
    `}</style>
  </div>
);
export default Skills;
