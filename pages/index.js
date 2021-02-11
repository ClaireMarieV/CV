import React from "react";
import SEO from "../components/Seo";

import Layout from "../components/Layout";
import Content from "../components/Content";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content>
      <div className="info">
        <h3>Contact</h3>
        <table>
          <tr>
            <td>Naissance</td>
            <td>le 21/08/1988</td>
          </tr>
          <tr>
            <td>Adresse</td>
            <td>31 rue des Jardiniers- 54000- Nancy</td>
          </tr>
          <tr>
            <td>N° telephone</td>
            <td>06.25.67.11.23</td>
          </tr>
          <tr>
            <td>Adresse mail</td>
            <td>claire.marie.vaney@gmail.com</td>
          </tr>
        </table>
      </div>
    </Content>

    <style jsx>{``}</style>
  </Layout>
);

export default IndexPage;
