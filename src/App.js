import React from "react";
import "./App.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiDownload, FiExternalLink, FiGithub } from "react-icons/fi";
import abc from "./abcdovoleibol.png";
import tamhelp from "./tamhelp.png";
import eu from "./lucas.png";

function App() {
  return (
    <div>
      <div className="border-container">
        <div className="container">
          <header className="App-header">
            <div className="intro">
              <span className="small">oi,👋 eu sou o Lucas</span>
            </div>
            <div className="fullstack">
              <div className="fullstack-text">
                <p>FullStack</p>
                <div className="icons">
                  <a
                    href="https://www.linkedin.com/seu-linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="icon" />
                  </a>
                  <a
                    href="https://github.com/seu-usuario"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="icon" />
                  </a>
                  <a href="seu-cv.pdf" download>
                    <FiDownload className="icon" />
                  </a>
                </div>
              </div>
            </div>
            <h2 className="desenvolvedor">Developer</h2>
            <p className="intro-text">
              Tenho 20 anos de idade com 2 anos de experiência <br />trabalhando em projetos em produção.
            </p>
            <a href="#projetos" className="projetos-button">
              Ver Projetos
            </a>
          </header>
        </div>
      </div>
      <section id="projetos">
        <h2>Principais Projetos</h2>
        <div className="projects-section">
          <div className="project">
            <img src={abc} alt="Projeto 1" />
            <h3>Associação ABC Do Voleibol</h3>
            <p>Breve explicação do Projeto 1.</p>
            <div className="project-buttons">
              <a href="link-deploy" target="_blank" rel="noopener noreferrer">
                <FiExternalLink className="project-icon" />
              </a>
              <a href="link-github" target="_blank" rel="noopener noreferrer">
                <FiGithub className="project-icon" />
              </a>
            </div>
          </div>
          <div className="project">
            <img src={tamhelp} alt="Projeto 2" />
            <h3>TamHelp - Gestão de chamados</h3>
            <p>Breve explicação do Projeto 2.</p>
            <div className="project-buttons">
              <a href="link-deploy" target="_blank" rel="noopener noreferrer">
                <FiExternalLink className="project-icon" />
              </a>
              <a href="link-github" target="_blank" rel="noopener noreferrer">
                <FiGithub className="project-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
