import React from "react";
import Link from "next/link";

const Projects = () => (
  <div className="projects">
    <h2>Projets</h2>
    <ul className="card projects">
      <li>
        <ul>
          <li>
            <h4>Longines Riviera Homepage -</h4>
            <span>HTML/CSS/GSAP </span>
          </li>
          <li>
            <h4>SaaS -</h4>
            <span>NextJS/ReactJS : ogme.io</span>
          </li>
          <li>
            <h4>Portfolio -</h4>
            <span>NextJS/ReactJS : clairemarievaney.com</span>
          </li>
          <li>
            <h4>Blog -</h4>
            <span>NextJS/ReactJS : ilétaitunefois.fr</span>
          </li>
          <li>
            <h4>Site d'assurance de location de véhicules E.Leclerc -</h4>
            <span>Symfony</span>
          </li>
          <li>
            <h4>Site vitrine pour une psychologue -</h4>
            <span>Elevently : psychologue-alicefelt.fr</span>
          </li>
          <li>
            <h4>Site de générations de blobs -</h4>
            <div>NextJS/ReactJS : organicblob.com</div>
          </li>
          <li>
            <h4>Site Ecommerce -</h4>
            <div>NextJS/Strapi</div>
          </li>
        </ul>
      </li>
    </ul>
    <style jsx>{`
      ul li {
        margin-bottom: 1rem;
      }
      .competences:nth-child(3) .card ul ul:nth-child(1) > li {
        font-weight: 600;
      }
    `}</style>
  </div>
);
export default Projects;
