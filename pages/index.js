import React from "react";
import SEO from "../components/Seo";

import Layout from "../components/Layout";
import Content from "../components/Content";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content>
      <div className="info">
        <div>
          <h3>Contact</h3>
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
          <h3>Formations</h3>
          <ul>
            <li>
              Certificat professionnel de Programmeur de site web : CNAM Nancy -
              Octobre 2018 / Juillet 2019
            </li>
            <li>
              M.A.N.A.A (Mise à Niveau en Arts Appliqués) : ORT Strasbourg -
              Septembre 2012 / Juin 2013
            </li>
            <li>
              Baccalauréat Professionnel Métiers de la Mode : MarieMarvingt
              Nancy - Septembre 2010 / Juin 2012
            </li>
          </ul>
        </div>
        <div>
          <h3>Experiences</h3>
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
              <span>Accompagnatrice auprès de personnes handicapées :</span>{" "}
              physiques et mentales - AFTC
            </li>
          </ul>
        </div>
      </div>
    </Content>

    <style jsx>{`
      ul li > span {
        font-weight: 600;
      }
      ul li:nth-child(2n) {
        margin-bottom: 1rem;
      }
    `}</style>
  </Layout>
);

export default IndexPage;
