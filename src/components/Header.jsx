export default function Header() {
  return (
    <header className="profile-header">
      <img
        src="me.png"
        alt="Foto de Perfil de Caio Bittencourt"
        className="profile-pic"
      />
      <h1>Caio Bittencourt</h1>
      <p>
        Graduando em Análise e Desenvolvimento de Sistemas (ADS) <br /> Front-end Developer | UX/UI Designer
      </p>
      <a
        href="caio-bittencourt.pdf"
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