import Header from "./components/Header";
import Accordion from "./components/Accordion";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <main className="portfolio-container">
      <Header />

      <section className="accordion-section">
        <Accordion title="Sobre mim">
          <p className="about-text">
            Me chamo Caio Lucas, tenho 25 anos e sou graduando em Análise e
            Desenvolvimento de Sistemas. Desde a infância, sou fascinado pelo universo da tecnologia, um hobby que nos últimos dois anos se tornou meu principal objetivo de carreira. Fora dos estudos, sou fã de uma boa ficção científica e me aventuro no multiplayer de Halo Infinite.
          </p>
        </Accordion>

        <Accordion title="Skills">
          <div className="skills-inline">
            <span>JavaScript</span> <span className="separator">•</span>
            <span>TypeScript</span> <span className="separator">•</span>
            <span>React</span> <span className="separator">•</span>
            <span>Angular</span> <span className="separator">•</span>
            <span>Tailwind CSS</span>
          </div>
        </Accordion>

        <Accordion title="Idiomas">
          <ul className="info-list">
            <li>
              Português <span className="level">(nativo)</span>
            </li>
            <li>
              Inglês <span className="level">(intermediário)</span>
            </li>
            <li>
              Espanhol <span className="level">(avançado)</span>
            </li>
            <li>
              Italiano <span className="level">(básico)</span>
            </li>
          </ul>
        </Accordion>

        <Accordion title="Contato">
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