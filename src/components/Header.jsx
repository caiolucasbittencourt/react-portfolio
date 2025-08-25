export default function Header() {
  return (
    <header className="profile-header">
      <img
        src="src/assets/foto.png"
        alt="Foto de Perfil de Caio Bittencourt"
        className="profile-pic"
      />
      <h1>Caio Bittencourt</h1>
      <p>
        Graduando em Análise e Desenvolvimento de Sistemas, atuando como
        desenvolvedor front-end e UX/UI designer
      </p>
      <a
        href="src/assets/caiobittencourt.pdf"
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