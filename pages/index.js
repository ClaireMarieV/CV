import React from "react";
import SEO from "../components/Seo";
import Link from "next/link";
import Layout from "../components/Layout";
import Content from "../components/Content";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Header from "../components/Header";
import Experiences from "../components/Experiences";
import Formations from "../components/Formations";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <section>
      <div>{/* <img src="/svg/motionPath.svg" /> */}</div>
    </section>
    <Content>
      <div>
        <Skills />
      </div>

      <div className="content-projects">
        <Projects />
        <Formations />
        <Experiences />
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
