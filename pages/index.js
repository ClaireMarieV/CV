import React from "react";
import SEO from "../components/Seo";
import Link from "next/link";
import Layout from "../components/Layout";
import Content from "../components/Content";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content>
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
                <span>31 rue des Jardiniers- 54000- Nancy</span>
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
        <div>
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
        <span>_______________________________________________</span>
        <div className="experiences">
          <h2>Experiences</h2>
          <ul>
            <li>
              <span>OCT 2019 MAR 2020</span>
            </li>
            <li>
              <span>Developpeuse Web :</span> VIA MOBILIS
            </li>
            <li>
              <span>MAI 2019 JUIL 2019</span>
            </li>
            <li>
              <span>Stage Developpeuse Web :</span> ASSURANDIS
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
              <span>Aide de cuisine :</span> en cocktails, chaud, froid,
              patisserie et dressage des plats et aperitifs - Marcotullio/Extras
              (par intermittence sur plusieurs années)
            </li>
            <li>
              <span>JAN 2014 JUI 2014</span>
            </li>
            <li>
              <span>Accompagnatrice auprès de personnes handicapées :</span> -
              AFTC
            </li>
          </ul>
        </div>
      </div>
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
              <li>Photoshop</li>
              <li>Adobe Illustrator</li>
            </ul>
          </li>
        </ul>

        <ul className="card">
          <li>
            <h3>Projets</h3>
            <ul>
              <li>
                <ul>
                  <li>Portfolio -</li>
                  <li>
                    Next :
                    <Link href="https://clairemarievaney.com">
                      <a target="_blank"> clairemarievaney.com</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Blog - </li>
                  <li>
                    Next :
                    <Link href="https://ilétaitunefois.fr">
                      <a target="_blank"> ilétaitunefois.fr</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Site d'assurance de location de véhicules E.Leclerc -</li>
                  <li>Symfony</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Site de vente de dragées -</li>
                  <li>Express</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    Site vitrine pour une psychologue
                    clinicienne/psychothérapeute -
                  </li>
                  <li>
                    Elevently :
                    <Link href="https://psychologue-alicefelt.fr">
                      <a target="_blank"> psychologue-alicefelt.fr</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Site d'écoute de podcast -</li>
                  <li>
                    PHP :
                    <Link href="https://felicitylab.fr">
                      <a target="_blank"> felicitylab.fr</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    Site sur les tendances de couleurs Pantone dans la
                    HauteCouture -
                  </li>
                  <li>Next</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Site de re-vente de vêtements -</li>
                  <li>Next</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Content>

    <style jsx>{`
      .info h2,
      .experiences h2,
      .competences h2 {
        color: #ddafa9;
      }
      .experiences ul li > span {
        font-weight: 800;
      }
      .info ul li:nth-child(2n) {
        margin-bottom: 1rem;
      }
      .competences:nth-child(3) .card li > ul li > ul:nth-child(1) > li {
        font-weight: 600;
      }
      .competences:nth-child(2) .card > li ul {
        margin-bottom: 1rem;
      }
    `}</style>
  </Layout>
);

export default IndexPage;
