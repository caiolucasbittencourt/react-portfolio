export default function Footer() {
  return (
    <footer className="socials-footer">
      <a
        href="https://www.linkedin.com/in/caiolucasbittencourt/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="src/assets/linkedin.gif"
          alt="Meu perfil no LinkedIn"
          className="social-icon"
        />
      </a>
      <a
        href="https://github.com/caiolucasbittencourt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="src/assets/github.gif"
          alt="Meu perfil no Github"
          className="social-icon"
        />
      </a>
    </footer>
  );
}