export default function Header() {
  return (
    <header className="profile-header">
      <img
        src="./src/assets/me.png"
        alt="Foto de Perfil de Caio Bittencourt"
        className="profile-pic"
      />
      <h1>Caio Bittencourt</h1>
      <p>
        Graduando em Análise e Desenvolvimento de Sistemas (ADS) <br /> Desenvolvedor Front-End & UX/UI Designer
      </p>
      <a
        href="./src/assets/caiobittencourt.pdf"
        className="cv-button"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        Download CV
      </a>
    </header>
  );
}