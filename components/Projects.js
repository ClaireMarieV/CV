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
            <span>
              Next :
              <Link href="https://ogme.io">
                <a target="_blank"> ogme.io</a>
              </Link>
            </span>
          </li>
          <li>
            <h4>Portfolio -</h4>
            <span>
              Next :
              <Link href="https://clairemarievaney.com">
                <a target="_blank"> clairemarievaney.com</a>
              </Link>
            </span>
          </li>
          <li>
            <h4>Blog - </h4>
            <span>
              Next :
              <Link href="https://ilétaitunefois.fr">
                <a target="_blank"> ilétaitunefois.fr</a>
              </Link>
            </span>
          </li>
          <li>
            <h4>Site d'assurance de location de véhicules E.Leclerc -</h4>
            <span>Symfony</span>
          </li>
          <li>
            <h4>Site de vente de dragées -</h4>
            <span>Express</span>
          </li>
          <li>
            <h4>Site vitrine pour une psychologue -</h4>
            <span>
              Elevently :
              <Link href="https://psychologue-alicefelt.fr">
                <a target="_blank"> psychologue-alicefelt.fr</a>
              </Link>
            </span>
          </li>
          <li>
            <h4>Site d'écoute de podcast -</h4>
            <div>
              PHP :
              <Link href="https://felicitylab.fr">
                <a target="_blank"> felicitylab.fr</a>
              </Link>
            </div>
          </li>
          <li>
            <h4>Site de générations de blobs -</h4>
            <div>
              Next :
              <Link href="https://organicblob.com">
                <a target="_blank"> organicblob.com</a>
              </Link>
            </div>
          </li>
          <li>
            <h4>Site Ecommerce -</h4>
            <div>Next/Strapi</div>
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
