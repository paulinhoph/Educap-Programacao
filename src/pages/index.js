import React from "react"
import styled from "styled-components";

import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
import Module from "../components/module";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  max-width: 1440px;

  @media (max-width: 667px) {
    width: 90%;
  }
`;

const Logo = styled.img`
  display: block;
  width: 150px;
  margin: 2rem auto;
`;

const Message = styled.span`
  display: block;
  width: 50%;
  margin: 1.5rem auto;
  text-align: center;
  font: 400 1.15rem 'Roboto', sans-serif;

  @media (max-width: 667px) {
    width: 90%;
  }
`;

const ModulesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 2rem auto;
  padding: 0;
  list-style: none;

  @media (max-width: 667px) {
    width: 100%;
    flex-direction: column;
  }
`;

const modules = [
  {
    id: 1,
    name: 'Páginas Web Responsivas',
    description: 'Aprendendo como a internet funciona e a criar páginas responsivas',
    tags: ['html', 'css', 'responsive design'],
    link: 'module-1/how-it-works',
  },
  {
    id: 2,
    name: 'Interatividade de Páginas',
    description: 'Aprendendo a pensar como um software funciona e desenvolver aplicações usando JavaScript',
    tags: ['lógica', 'js', 'react'],
    link: 'module-2/intro',
  },
  {
    id: 3,
    name: 'Arquitetura Front-End',
    description: 'Aprendendo a criar uma aplicação robusta e a pensar a arquitetura do código',
    tags: ['front-end first', 'testes automatizados', 'hooks'],
    link: null,
  }
];

const IndexPage = ({ location }) => {
  const renderModules = () => {
    return modules.map((module) => (
      <Module
        key={module.id}
        id={module.id}
        name={module.name}
        description={module.description}
        tags={module.tags}
        link={module.link}
      />
    ));
  };

  return (
    <Layout
      location={location}
      noMenu
    >
      <SEO title="Academia" />
      <Container>
        <Logo src="data:image/png;base64,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" />
        <Message>
          Olá! Aqui você vai encontrar todo o material de apoio relacionado as carreiras do Educap.
        </Message>
        <ModulesList>
          {renderModules()}
        </ModulesList>
      </Container>
    </Layout>
  );
};

export default IndexPage
