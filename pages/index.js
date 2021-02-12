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

    <style jsx>{`
      .info h2,
      .experiences h2,
      .competences h2 {
        color: #ddafa9;
      }
      .experiences ul li > span {
        font-weight: 800;
      }
      .training ul li:nth-child(2n) {
        margin-bottom: 1rem;
      }
      .competences:nth-child(3) .card ul ul:nth-child(1) > li {
        font-weight: 600;
      }
      .competences:nth-child(2) .card > li ul {
        margin-bottom: 1rem;
      }

      .experiences {
        border-top: 1px solid black;
      }

      .projects h4 {
        font-weight: 600;
        margin: 0;
      }

      .projects li ~ li {
        margin-top: 1rem;
      }
    `}</style>
  </Layout>
);

export default IndexPage;
