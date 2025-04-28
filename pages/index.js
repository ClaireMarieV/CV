import React from "react";
import SEO from "../components/Seo";
import Layout from "../components/Layout";
import Content from "../components/Content";
import Info from "../components/Info";
import Projects from "../components/Projects";
import Header from "../components/Title";
import Experiences from "../components/Experiences";
import Formations from "../components/Formations";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content>
      <Info />
      <Header />

      <div className="content-projects">
        <Experiences />
        <Formations />
      </div>
    </Content>

    <style jsx>{`
      .content-projects {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
    `}</style>
  </Layout>
);

export default IndexPage;
