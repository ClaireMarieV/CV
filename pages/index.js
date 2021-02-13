import React from "react";
import SEO from "../components/Seo";
import Link from "next/link";
import Layout from "../components/Layout";
import Content from "../components/Content";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experiences from "../components/Experiences";
import Contact from "../components/Contact";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content>
      <Contact />
      <Skills />
      <Experiences />
      <Projects />
    </Content>

    <style jsx>{``}</style>
  </Layout>
);

export default IndexPage;
