import { useState, useEffect } from "react";
import Header from "./components/Header";
import Accordion from "./components/Accordion";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`portfolio-container ${isLoaded ? "loaded" : ""}`}>
      <Header />

      <section className="accordion-section">
        <Accordion title="About me">
          <p className="about-text">
            Oi! Eu sou o Caio, graduando em{" "}
            <strong>Análise e Desenvolvimento de Sistemas</strong>. Atuo como{" "}
            <strong>desenvolvedor front-end</strong> e{" "}
            <strong>designer UX/UI</strong>, com foco em criar interfaces
            intuitivas que proporcionem a melhor experiência para o usuário.
          </p>
          <br />
          <p className="about-text">
            Atualmente, busco uma oportunidade como{" "}
            <strong>desenvolvedor front-end</strong> para colaborar em projetos
            desafiadores e continuar crescendo profissionalmente.
          </p>
        </Accordion>

        <Accordion title="Skills">
          <div className="skills-inline">
            <span>HTML</span> <span className="separator">•</span>
            <span>CSS</span> <span className="separator">•</span>
            <span>Sass</span> <span className="separator">•</span>
            <span>Tailwind CSS</span> <span className="separator">•</span>
            <span>Bootstrap</span> <span className="separator">•</span>
            <span>JavaScript</span> <span className="separator">•</span>
            <span>TypeScript</span> <span className="separator">•</span>
            <span>jQuery</span> <span className="separator">•</span>
            <span>React</span> <span className="separator">•</span>
            <span>Next.js</span> <span className="separator">•</span>
            <span>Vue.js</span> <span className="separator">•</span>
            <span>Node.js</span> <span className="separator">•</span>
            <span>MySQL</span> <span className="separator">•</span>
            <span>Git</span> <span className="separator">•</span>
            <span>GitHub</span> <span className="separator">•</span>
            <span>Vite</span> <span className="separator">•</span>
            <span>Figma</span> <span className="separator">•</span>
            <span>VSCode</span> <span className="separator">•</span>
            <span>Linux</span> <span className="separator">•</span>
            <span>Windows</span>
          </div>
        </Accordion>

        <Accordion title="Projects">
          <ul className="info-list">
            <li>
              <strong>Masterclass Valorant Pro</strong>
              <p className="project-description">
                Campanha de captação de leads de uma masterclass de Valorant.
              </p>
              <a
                href="https://github.com/caiolucasbittencourt/masterclass-valorant-pro"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                Ver no GitHub
              </a>
            </li>
            <li>
              <strong>DEVagas</strong>
              <p className="project-description">
                Newsletter diário de vagas de tecnologia, focada na comunidade
                de desenvolvedores.
              </p>
              <a
                href="https://github.com/caiolucasbittencourt/devagas"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                Ver no GitHub
              </a>
            </li>
          </ul>
        </Accordion>

        <Accordion title="Languages">
          <ul className="info-list">
            <li>
              Português <span className="level">(nativo)</span>
            </li>
            <li>
              Inglês <span className="level">(intermediário a avançado)</span>
            </li>
            <li>
              Espanhol <span className="level">(avançado)</span>
            </li>
            <li>
              Italiano <span className="level">(básico a intermediário)</span>
            </li>
          </ul>
        </Accordion>

        <Accordion title="Contact">
          <ul className="info-list">
            <li>
              <strong>E-mail:</strong> caiolucasbittencourt@hotmail.com
            </li>
            <li>
              <strong>WhatsApp:</strong> (99) 999651-3294
            </li>
          </ul>
        </Accordion>
      </section>

      <Footer />
    </main>
  );
}
