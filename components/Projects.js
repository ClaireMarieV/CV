import React from "react";
import Link from "next/link";

const Projects = () => (
  <div className="projects">
    <h2>Projets</h2>
    <ul className="card projects">
      <li>
        <ul>
          <li>
            <h4>Portfolio -</h4>
            <div>
              Next :
              <Link href="https://clairemarievaney.com">
                <a target="_blank"> clairemarievaney.com</a>
              </Link>
            </div>
          </li>
          <li>
            <h4>Blog - </h4>
            <div>
              Next :
              <Link href="https://ilétaitunefois.fr">
                <a target="_blank"> ilétaitunefois.fr</a>
              </Link>
            </div>
          </li>
          <li>
            <h4>Site d'assurance de location de véhicules E.Leclerc -</h4>
            <div>Symfony</div>
          </li>
          <li>
            <h4>Site de vente de dragées -</h4>
            <div>Express</div>
          </li>
          <li>
            <h4>Site vitrine pour une psychologue -</h4>
            <div>
              Elevently :
              <Link href="https://psychologue-alicefelt.fr">
                <a target="_blank"> psychologue-alicefelt.fr</a>
              </Link>
            </div>
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
            <h4>Site sur les tendances de couleurs Pantone -</h4>
            <div>Next</div>
          </li>
          <li>
            <h4>Site de re-vente de vêtements -</h4>
            <div>Next</div>
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
