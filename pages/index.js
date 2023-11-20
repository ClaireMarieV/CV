import React from "react";
import SEO from "../components/Seo";
import Link from "next/link";
import Layout from "../components/Layout";
import Content from "../components/Content";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Experiences from "../components/Experiences";
import Formations from "../components/Formations";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content>
      <Skills />
      <Projects />
      <Experiences />
      <Formations />
    </Content>

    <style jsx>{``}</style>
  </Layout>
);

export default IndexPage;
